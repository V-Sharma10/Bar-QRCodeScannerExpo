import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHelperTextBox from "./components/MaterialHelperTextBox";
import MaterialRightIconTextbox from "./components/MaterialRightIconTextbox";
import LoginButton from "./components/LoginButton";
import SignUpButton from "./components/SignUpButton";
import GoogleSignInButton from "./components/GoogleSignInButton";
import { render } from "react-dom";
// import from ''
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
      {/* <View
      style={{flex:1,}}
      > */}
      <MaterialHelperTextBox
        style={styles.materialHelperTextBox}
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
  }
});

export default Login2;