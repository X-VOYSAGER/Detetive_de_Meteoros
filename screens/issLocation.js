import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class IssLocation extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text>
                    IssLocation
                </Text>
            </View>


        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})


