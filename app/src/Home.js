import React, { Component } from 'react'
import { View, Text, } from 'native-base'
import { AsyncStorage, SafeAreaView, ScrollView  } from 'react-native'
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
            

            
          
                <SafeAreaView
                    style={{
                        flex:1,
                    }}
                >
                    <ScrollView
                    style={{
                        // flex:1,
                        // marginHorizontal: 20,
                        backgroundColor: 'transparent',
                         marginHorizontal: 20,
                    }}
                    >
                        <View
                         style={{
                            flex:1,
                        }}
                        >
                <Text
                    style={{
                        textAlign:'center',
                        fontSize:22,
                        marginTop:25
                    }}
                >
                      {/* Welcome */}
                        {`Welcome ${this.state.username} \n\n`}
                        <Text
                            style={{
                                flex:1,
                                marginRight:10,
                                marginLeft:10,
                                paddingRight:10,
                                paddingLeft:10
                            }}
                        >
                            The Drawer contains {'\n'} Profile,
                            
                            {'\n'} Home,
                            {'\n'} Scan &
                            {'\n'} History{'\n\n'}


                            You can scan the barcode or the QR code of the products you want to add to the cart.{'\n\n'}

                            Once scanned, the modal of the respective product will open and you can select the quantity.{'\n\n'}
                            The cart can only be accessed from the scan page so either click on the search icon on the top right corner of this page or navigate using drawer. There you can spot your cart.{'\n\n'}
                            You can pay directly from the cart. 
                        </Text>


                        <Text
                            style={{
                                fontSize:18,
                            }}
                        >
                            {'\n\n\n'}
                            Note that the server and the blockchain has been hosted on different free test servers so it takes a bit of time for the servers to process. So please bear with us due to that.


                        </Text>
                </Text>
                </View>
                </ScrollView>
                </SafeAreaView>
     
        )
    }
}
