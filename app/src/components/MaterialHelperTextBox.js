import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

class MaterialHelperTextBox extends Component {
    constructor(props){
      super(props)
      this.state={
        usernameField:''
      }
    }

    handleOnChange=(e)=>{
      // console.log(e)
      // console.log()
      this.props.UserNameEmpty(e.nativeEvent.text)
    }
    AddUsername=(e)=>{
      // console.log(e.nativeEvent.text)
      
    }

  render(){
  return (
    <View style={[styles.container, this.props.style]}>
      <Text style={styles.label}></Text>
      <TextInput 
      placeholder="Username"
       style={styles.inputStyle}
       onChange={this.handleOnChange}
      //  onBlur={this.AddUsername}
       ></TextInput>
      <Text style={styles.helper}>Enter user@exmaple.com for proceeding further. Password can be anything.</Text>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    fontSize: 12,
    textAlign: "left"
  },
  inputStyle: {
    // width: 375,
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    lineHeight: 16,
    paddingLeft:10,
    paddingRight:10
  },
  helper: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 10,
    textAlign: "left"
  }
});

export default MaterialHelperTextBox;
