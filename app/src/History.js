import React, { Component } from 'react'
import {View, Text, Image } from 'react-native'
import Axios from 'axios'
export default class History extends Component {
    constructor(props){
        super(props)
        this.state={
            HistoryArr:[],
            loading:true
        }

    }

    async componentDidMount(){
        this.setState({
            loading:true
        })
        const getHistory = await Axios.post(`https://quiet-depths-08015.herokuapp.com/orders/getHistory/`,{
            "id": "user@example.com"
        })
        this.setState({
            loading:false,
            HistoryArr:getHistory.data.data
        })
        console.log(getHistory.data.data);
    }
    
    render() {
        return (
            <View>
                {this.state.loading?
                // <Image
                //     source={require('../assets/loader.png')} 
                // />
                <View>
                    
                     <Text
                     style={{
                         fontSize:25,
                         left:'auto',
                        //  alignItems:'center',
                         alignSelf:'center',
                         top:50
                     }}
                     >
                        Loading ...
                     </Text>
                </View>
                :
                <View>

                    {this.state.HistoryArr.map((element,index)=>{
                        return(
                            <View key={index}>
                                <Text>
                                {index}
                                </Text>
                            </View>
                        )
                    })}

                </View>
                }
            </View>
        )
    }
}
