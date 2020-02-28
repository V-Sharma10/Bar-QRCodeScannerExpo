import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHelperTextBox from "./components/MaterialHelperTextBox";
import MaterialRightIconTextbox from "./components/MaterialRightIconTextbox";
import LoginButton from "./components/LoginButton";
import SignUpButton from "./components/SignUpButton";
import GoogleSignInButton from "./components/GoogleSignInButton";
import { render } from "react-dom";

class Login2 extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }
    console.log(props)
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.rect2}></View>
      <MaterialHelperTextBox
        style={styles.materialHelperTextBox}
      ></MaterialHelperTextBox>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>


      <LoginButton
        username='name'
        password="pass"
        style={styles.materialButtonViolet}
        navigation={this.props.navigation}
      ></LoginButton>


      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <Text 
      style={styles.clickHere}
      onPress={()=>{console.log('Forgot Password Called')}}
      >
        Click Here</Text>
      <Text style={styles.or4}>OR</Text>


      <SignUpButton
        style={styles.materialButtonPink}
      ></SignUpButton>
      

      <GoogleSignInButton
        style={styles.materialButtonShare}
      ></GoogleSignInButton>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)",
    borderRadius: 26,
    borderColor: "#000000",
    borderWidth: 0
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
    top: 270,
    left: 46,
    width: 272,
    height: 90,
    position: "absolute"
  },
  materialRightIconTextbox: {
    top: 381,
    left: 46,
    width: 272,
    height: 54,
    position: "absolute"
  },
  materialButtonViolet: {
    top: 481,
    left: 130,
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
    top: 451,
    left: 248,
    width: 70,
    height: 18,
    color: "rgba(61,65,210,1)",
    position: "absolute",
    fontSize: 12,
    // fontFamily: "roboto-regular"
  },
  or4: {
    top: 182,
    left: 169,
    width: 24,
    height: 24,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 18,
    // fontFamily: "roboto-regular"
  },
  materialButtonPink: {
    top: 584,
    left: 64,
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
    top: 70,
    left: 138,
    width: 85,
    height: 82,
    position: "absolute"
  }
});

export default Login2;