import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Meteor from "../screens/meteor";
import IssLocation from "../screens/issLocation";

const Stack = createStackNavigator()

export default class StackNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                  <Stack.Screen
                    name="IssLocation"
                    component={IssLocation}
                />
                  <Stack.Screen
                    name="Meteor"
                    component={Meteor}
                />
            </Stack.Navigator>

        )
    }


}