import React, { Component } from 'react'
import { View, Text } from 'native-base'
export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            url:'https://quiet-depths-08015.herokuapp.com/'
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
