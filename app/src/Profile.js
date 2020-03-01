import React, { Component } from 'react'
import {View, Text, AsyncStorage,TextInput} from 'react-native'
import Axios from 'axios';
import { Button } from 'native-base';
import Icon from "@expo/vector-icons/Ionicons";
export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            balance:0,
            amountToAdd:0
        }
    }

    async componentDidMount(){
        console.log('profile page')
        try{
       const user = await AsyncStorage.getItem('username').then((res)=>{console.log(res);
        this.setState({
            username:res
        })
    });

        const balance = await Axios.post('https://quiet-depths-08015.herokuapp.com/balance/checkBalance/',{
            "id":this.state.username
        })
        console.log(balance.data.balance)
        this.setState({
            balance:balance.data.balance
        })}
        catch(err){
            alert('error occured . please try again')
        }
    }
    
    handleAmountField=(e)=>{
        console.log(e.nativeEvent.text)
        this.setState({
            amountToAdd:e.nativeEvent.text
        },
        ()=>{
            console.log(typeof(this.state.amountToAdd))
        })
    }

    addAmount = async ()=>{
            alert('Please Wait...It will take sometime')
        try{
        const add = await Axios.post('https://quiet-depths-08015.herokuapp.com/balance/addBalance/',{
            "id": this.state.username,
            "amount": this.state.amountToAdd
        })
        console.log(add);
        console.log('Successfully Added')
            }
        catch(err){
            alert('Cannot be added. Please try again')
        }

        alert('Refresh the page to see the updated value')
    }

    render() {
        return (
            <View>

                    <Text
                    style={{
                        fontSize:18,
                        marginTop:10,
                        marginBottom:10,
                        marginLeft:10,
                        marginRight:10,
                        left:'auto',
                        textAlign:'center'

                    }}
                    >
                        Your Current Balance: {this.state.balance}{'\n'}
                    </Text>
                   
                    <Text
                    style={{
                        fontSize:18,
                        marginTop:10,
                        marginBottom:10,
                        marginLeft:10,
                        marginRight:10,
                        left:'auto',
                        textAlign:'center'

                    }}>
                        Add balance: 

                    </Text>
                    <TextInput 
                        placeholder="Amount to add to wallet"
                        style={{
                            paddingRight:50,
                            paddingLeft:50,
                            alignItems:'center',
                            textAlign:'center'
                        }}
                        // style={styles.inputStyle}
                        // onChange={this.handleOnChangeUsername}
                        onChange={this.handleAmountField}
                        //  onBlur={this.AddUsername}
                        />
                        {/* <Button title={'Add Amount'} /> */}

                        <Icon name="ios-add" color="green" size={45}
                            style={{
                                // flex:1,
                                // marginTop:'80%',
                                textAlign:'center',
                                
                            }}
                                onPress={this.addAmount}
                            />
                    </View>
         
        )
    }
}
