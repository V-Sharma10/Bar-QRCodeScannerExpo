import React, { Component } from 'react'
import {View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
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
        },()=>{
            console.log('getHistory completed ')
            console.log(this.state.HistoryArr)
        })
        console.log('jkdfkjhas')

        for(let i in this.state.HistoryArr)
        {
        console.log(this.state.HistoryArr[i].items);
        console.log(this.state.HistoryArr[i].unit_prices);
        console.log(this.state.HistoryArr[i].qty);
        console.log(this.state.HistoryArr[i].total);
        console.log('new item')
    }
        
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

                <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>git 
                <View>

                    {this.state.HistoryArr.map((element,index)=>{
                        return(
                            <View key={index}
                            style={{
                                paddingBottom:10,
                                paddingLeft:10,
                                paddingRight:10,
                                paddingTop:10,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                            >
                                <Text>
                                    {`\nProducts IDs: \n`}
                                    {element.items.map((e,i)=>{
                                    return(
                                        <Text key={i}>
                                            {`${e}\n`}
                                        </Text>
                                    )
                                    
                                })}

                                    {'Quantity: \n'}
                                { element.qty.map((e,i)=>{
                                    return(
                                        <Text key={i}>
                                            {`${e}\n`}
                                        </Text>
                                    )
                                    
                                })}

                                
                                    Total: ₹ {element.total/10**15}{'\n'}
                                    Time Of Purchase: {Date(element.timeOfPurchase)}
                                
                                </Text>
                            </View>
                        )
                    })}

                </View>

</ScrollView>
</SafeAreaView>

                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'transparent',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });