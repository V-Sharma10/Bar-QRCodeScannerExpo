import React, { Component } from "react";
import { StyleSheet, View, Text , TextInput, TouchableOpacity} from "react-native";
import MaterialHelperTextBox from "./components/MaterialHelperTextBox";
import MaterialRightIconTextbox from "./components/MaterialRightIconTextbox";
import LoginButton from "./components/LoginButton";
import SignUpButton from "./components/SignUpButton";
import GoogleSignInButton from "./components/GoogleSignInButton";
import { render } from "react-dom";

import Icon from "@expo/vector-icons/Ionicons";
import { Button } from "native-base";
import Axios from "axios";
// import from ''
class Login2 extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isUsernameEmpty:true,
      toSignUp:false,
      signupUsername:'',
      signupPassword:''
    }
    console.log(props)
  }
  handleSignUp =async () => {
    console.log(this.state.signupPassword +" "+ this.state.signupUsername);
    alert('Please wait... ')

    try{
    const adduser = await Axios.post('https://quiet-depths-08015.herokuapp.com/users/register',{
      "id": this.state.signupUsername,
      "password": this.state.signupPassword
    })
    console.log(adduser);
    
    this.setState({
      toSignUp:false,
    })
    console.log(this.props)
  }
  catch(err){
    alert('Signup Failed... Try Again')
  }
}

  handleOnChangeUsername = (e)=>{
    console.log(e.nativeEvent.text)
    this.setState({
      signupUsername:e.nativeEvent.text
    })
  }
  handleOnChangePassword = (e)=>{
    console.log(e.nativeEvent.text)
    this.setState({
      signupPassword:e.nativeEvent.text
    })
  }

  handleLogin=()=>{
    
  }

  UserNameEmpty = (e)=>{
    // console.log()
    console.log("parent Component   " + e);
    this.setState({
      username:e,
      isUsernameEmpty:false
    })
  }

  toSignUp = () =>{
    this.setState({
      toSignUp:true
    })
  }
  render(){
  return (
    <View style={styles.container}>
      {this.state.toSignUp===false? 
        <View style={styles.container}>

        <View style={styles.rect}></View>
      <View style={styles.rect2}></View>
      {/* <View
      style={{flex:1,}}
      > */}
     
      <MaterialHelperTextBox
        style={styles.materialHelperTextBox}
        UserNameEmpty = {this.UserNameEmpty}
      ></MaterialHelperTextBox>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
      {/* </View> */}

      <LoginButton
        username='name'
        password="pass"
        style={styles.materialButtonViolet}
        navigation={this.props.navigation}
        handleLogin = {this.handleLogin}
        isUsernameEmpty={this.state.isUsernameEmpty}
        username={this.state.username}
      ></LoginButton>


      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text 
      style={styles.clickHere}
      onPress={()=>{
        console.log('Forgot Password Called')}}
      >
        Click Here</Text>
      <Text style={styles.or4}>OR</Text>


      <SignUpButton
        style={styles.materialButtonPink}
        toSignUp={this.toSignUp}
      ></SignUpButton>
      

      <GoogleSignInButton
        style={styles.materialButtonShare}
      ></GoogleSignInButton>
      </View>
      :<View
      style={{
        flex:1,
          backgroundColor:'white',
          textAlign:'center',

          marginTop:100,
          // alignContent:'center',
          alignSelf:'center',
          alignItems:'center',
          left:'auto',
          width:'100%'
        }}
      >
       
        <Text
        style={{
          color:'black',
          fontSize:24,
        }}
        >
             Signup{'\n'}
        </Text>
        <TextInput 
      placeholder="Username"
       style={styles.inputStyle}
       onChange={this.handleOnChangeUsername}
      //  onBlur={this.AddUsername}
       ></TextInput>
       <TextInput 
      placeholder="Password"
       style={styles.inputStyle}
       secureTextEntry={true}
       onChange={this.handleOnChangePassword}
      //  onBlur={this.AddUsername}
       ></TextInput>
       <TouchableOpacity 
          style={styles.container2}
          onPress={()=>{
            console.log('SignUp clicked in signup component');
            
            this.handleSignUp()
          }}

          >
            <Text 
            style={styles.caption}
            >Sign Up</Text>
    </TouchableOpacity>
       <Icon name="ios-home" color="green" size={35}
       style={{
         flex:1,
         marginTop:'80%'
       }}
        onPress={
          ()=>{
              this.setState({
                toSignUp:false
              })
          }
        }
      />
      </View>}
      
      
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)",
    borderRadius: 26,
    borderColor: "#000000",
    borderWidth: 0,
    textAlign:'center',
   
  },
  rect: {
    flex: 0.3,
    backgroundColor: "rgba(0,73,144,1)"
  },
  rect2: {
    flex: 0.7,
    backgroundColor: "rgba(252, 252, 252,1)",
    shadowOpacity: 0.01
  },
  materialHelperTextBox: {
    flex:1,
    top: 270,
    // left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: '100%',
    height: 90,
    position: "absolute",
    // padding:20
  },
  materialRightIconTextbox: {
    flex:1,
    top: 381,
    left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: '100%',
    height: 54,
    position: "absolute",
    // padding:20
  },
  materialButtonViolet: {
    flex:1,
    top: 481,
    left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: 100,
    height: 36,
    backgroundColor: "rgba(0,73,144,1)",
    position: "absolute",
    elevation: 30,
    borderRadius: 32,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(117,104,104,1)",
    shadowOpacity: 0.65,
    shadowRadius: 10
  },
  forgotPassword: {
    flex:1,
    top: 451,
    left: 150,
    width: 98,
    height: 18,
    color: "rgba(8,6,6,1)",
    position: "absolute",
    fontSize: 12,
    // fontFamily: "roboto-regular"
  },
  clickHere: {
    flex:1,
    top: 451,
    left: 260,
    width: 70,
    height: 18,
    color: "rgba(61,65,210,1)",
    position: "absolute",
    fontSize: 12,
    // fontFamily: "roboto-regular"
  },
  or4: {
    top: 182,
    left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: 24,
    height: 24,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 18,
    flex:1,
    // fontFamily: "roboto-regular"
  },
  materialButtonPink: {
    flex:1,
    top: 584,
    left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: 242,
    height: 36,
    position: "absolute",
    elevation: 30,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(93,73,73,1)",
    shadowRadius: 10
  },
  materialButtonShare: {
    flex:1,
    top: 70,
    left: 'auto',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width: 85,
    height: 82,
    position: "absolute"
  },
  inputStyle: {
    // width: 375,
    // flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    lineHeight: 16,
    marginBottom:10,
    marginTop:10,
    marginRight:10,
    marginLeft:10,
  },
  caption: {
    color: "pink",
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  container2: {
    backgroundColor: "#E91E63",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 26,
    paddingLeft: 26,
    elevation: 2,
    minWidth: 88,
    borderRadius: 72,
    paddingTop:16,
    paddingBottom:16,
    marginTop:10,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#fff",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
});

export default Login2;