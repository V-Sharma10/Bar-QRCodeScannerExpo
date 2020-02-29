import React, { Component } from 'react'
import {View , Text} from 'react-native'
import Scanner from './components/Scanner'
export default class Scan extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              
            }}>
                <Scanner navigation={this.props.navigation}/>  
            </View>
        )
    }
}
