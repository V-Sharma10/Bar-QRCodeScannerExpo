import React, { Component } from 'react'
import {View, Text,AsyncStorage} from 'react-native'
import { Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
export default class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            cartArr:[]
        }
        console.log('cart jkajshdkfjhkashd')
    //     AsyncStorage.getItem('cart')
    //     .then(req => JSON.parse(req))
    //   .then(json => {console.log('lkskdflkj'+json);
    //   console.log(json[0].id)
    //   this.setState({cartArr:json},()=>{
    //       console.log(this.state)
    //   })
    // })
    //   .catch(error => console.log('error!'));
    }

    render() {
        return (
            <View
            style={{
                flex:1,
                flexDirection:'column',
            }}
            >
                    
                        {this.state.cartArr.map((element,index)=>{
                            return(
                                <View key={index}>
                               
                                    <Text >
                                      {`\n Product Id: ${ element.id}`} 
                                      {` \nQuantity: ${element.quantity}`}
                                    </Text>
                                    <Ionicons name="md-trash" size={40} color="red"
                                        onPress={()=>{
                                            console.log(`delete product ${index}`)
                                        }}
                                        style={{
                                            marginLeft:'80%'
                                        }}
                                    />
                                </View>
                            )
                        })}

                        <View>
                            {this.state.cartArr.length!==0?
                            
                            <Button title={'Clear Cart'} 
                                onPress={async()=>{
                                    console.log('cart clearing attempted');
                                    try {
                                        // await AsyncStorage.removeItem('cart');
                                        // await AsyncStorage.setItem('isCartEmpty',true)
                                        this.setState({
                                            cartArr:[]
                                        },()=>{
                                            alert('All items dropped.')
                                        })

                                        // await AsyncStorage.setItem('cart',JSON.stringify([]))
                                        return true;
                                    }
                                    catch(exception) {
                                        return false;
                                    }
                                }}
                            />

                            
                            :<Text>No Items in cart</Text>}

                            

                        
                        </View>
            </View>
        )
    }
}
