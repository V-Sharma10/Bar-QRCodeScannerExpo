import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { AsyncStorage } from 'react-native'
export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            url:'https://quiet-depths-08015.herokuapp.com/',
            username:''
        }
        console.log('HomeComponent')
        
    }

    async componentDidMount(){
        const user =  await AsyncStorage.getItem('username').then((res)=>{
            console.log("sdfasdfas "+res);
            this.setState({
                username:res
            })
        })
        console.log(user)
    }

    render() {
        return (
            <View>
                <Text>
                      Home
                        {'\n'}
                        {this.state.username}
                </Text>
            </View>
        )
    }
}
