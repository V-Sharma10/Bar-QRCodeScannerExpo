import React, { Component } from 'react'
import { View, Text } from 'native-base'
export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            url:'http://192.168.43.25:3000/items/'
        }
    }

    render() {
        return (
            <View>
                <Text>
                      Home
                </Text>
            </View>
        )
    }
}
