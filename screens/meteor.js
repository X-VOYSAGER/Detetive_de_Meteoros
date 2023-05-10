import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground, Image, Alert, FlatList, Dimensions } from "react-native";
import axios from "axios";

export default class Meteor extends Component {
    constructor() {
        super()
        this.state = {
            meteors: {}
        }
    }

    componentDidMount() {
        this.getMeteor()
    }

    getMeteor = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=cRax1QXjx3MOHlQ8iNEeKRcqgwhLb6NBa5j9RiCE")
            .then(response => {
                this.setState({
                    meteors: response.data.near_earth_objects
                })
            })
            .catch(error => { Alert.alert(error.message) })
    }


    render() {

        if (Object.keys(this.state.meteors).length == 0) {
            return (
                <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
                    <Text>
                        Carregando...
                    </Text>
                </View>


            )
        } else {
            var allMeteors = Object.keys(this.state.meteors).map(meteorDate => {
                return this.state.meteors[meteorDate]
            })
            var meteors = [].concat.apply([], allMeteors)
            meteors.forEach(element => {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_min) / 2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score = threatScore
            });
            meteors.sort((a, b) => {
                return b.threat_score - a.threat_score
            })
            meteors = meteors.slice(0, 5)
            return (
                <View style={styles.container}>
                    <Text>
                        .
                    </Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})


