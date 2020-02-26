import React, { Component } from 'react'
import {View , Text} from 'react-native'
import Scanner from './components/Scanner'
export default class Scan extends Component {
    render() {
        return (
            <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              
            }}>
                <Scanner/>  
            </View>
        )
    }
}
