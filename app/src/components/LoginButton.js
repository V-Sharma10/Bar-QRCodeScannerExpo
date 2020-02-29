import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, AsyncStorage } from "react-native";

function LoginButton(props) {
  
  return (
    <TouchableOpacity style={[styles.container, props.style]}
      onPress={()=>{
      console.log('Login clicked')
      console.log(props.username + " " + props.password);
      props.navigation.navigate("Home");
      AsyncStorage.setItem('username',props.username).then(()=>{
        console.log(props.username);
      })
    }}
    disabled={props.isUsernameEmpty}
    >
      <Text style={styles.caption}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
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
    fontSize: 14
  }
});

export default LoginButton;
