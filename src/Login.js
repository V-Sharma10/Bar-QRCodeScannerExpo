import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Button } from 'react-native';
 
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from "react-native-responsive-screen";
// import Button from '../../../SIH/client/src/components/Button';



export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            userId:'',
            password: '', 

            token:"" ,
            userobj:null

            
        }

        this.saveData = this.saveData.bind(this);
        this.handleGoogleSignin = this.handleGoogleSignin.bind(this)
    }

    saveData =  () =>{

      this.props.navigation.navigate("Home")

        // const {userId,password} = this.state;

        
        // let loginDetails={
        //     userId: userId,
        //     password: password
        // }

        // fetch('http://192.168.43.95:3000/api/patient/login', {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       password : this.state.password ,
        //       patientId :this.state.userId
        //     }),
        //   }).then((response) => response.json())
        //   .then((responseJson) => {
        //     this.setState({token: responseJson.token});
        //     console.log(responseJson.token)
             
        //     AsyncStorage.setItem('token', responseJson.token);
        //     Keyboard.dismiss();
        //     this.props.navigation.navigate("Home" , { token :responseJson.token});
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
  
        }

        handleGoogleSignin=()=>{
            console.log('Google Signin Attempted')
        }
    

    render() {
        return(
            <View style={styles.container}>

          <View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: 20
            
          }}
        >
          <Text
            style={{
              fontSize: 70,
              fontWeight: "400",
              opacity: 1,
              color : "white"
            }}
          >
            Login
          </Text>
        </View>

                <TextInput style={styles.inputBox}
                onChangeText={(userId) => this.setState({userId})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="User ID"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                value={this.state.userId}
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.password}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}> LOGIN </Text>
                </TouchableOpacity>

                <TouchableOpacity > 
                    <Text style={styles.extraText} onPress={() => this.props.navigation.navigate("Register")
                    }> Does Not Account </Text>
                </TouchableOpacity>

                <TouchableOpacity > 
                    <Text style={styles.extraText} onPress={() => {this.props.navigation.navigate("Home");} }> Forgot Password</Text>
                </TouchableOpacity>


                <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  
                }}
                >
                   <Button title={'Google SignIn'} onPress={this.handleGoogleSignin}/>

                </View>


            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#171941" ,
        flex :1
    },
    inputBox: {
        width: wp("92%"),
        height : 50 ,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#00BFFF',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    } ,
    extraText:{
        fontSize: 20,
        fontWeight: '300',
        color: '#4f83cc',
        textAlign: 'center',
        margin :8
    }
});