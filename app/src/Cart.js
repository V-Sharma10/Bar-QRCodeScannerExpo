import React, { Component } from 'react'
import {View, Text,AsyncStorage} from 'react-native'
export default class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            cartArr:[]
        }
        console.log('cart jkajshdkfjhkashd')
        AsyncStorage.getItem('cart')
        .then(req => JSON.parse(req))
      .then(json => {console.log('lkskdflkj'+json);
      console.log(json[0].id)
      this.setState({cartArr:json},()=>{
          console.log(this.state)
      })
    })
      .catch(error => console.log('error!'));
    }

    render() {
        return (
            <View>
                    
                        {this.state.cartArr.map((element,index)=>{
                            return(
                               
                                    <Text key={index}>
                                      {` Product Id: ${ element.id} \n
                                       Quantity: ${element.quantity}`}
                                    </Text>
                                
                            )
                        })}
            </View>
        )
    }
}
