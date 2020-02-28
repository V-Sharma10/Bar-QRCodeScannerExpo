import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Button } from "react-native";

function SignUpButton(props) {
  return (
    <TouchableOpacity 
    style={[styles.container, props.style]}
    onPress={()=>{
      console.log('SignUp clicked');
    }}
    >
      <Text 
      style={styles.caption}
      >Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E91E63",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 72,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    backgroundColor: 'transparent'
  }
});

export default SignUpButton;
