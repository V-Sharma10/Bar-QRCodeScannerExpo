import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    // <View>
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputStyle}></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
     
    </View>
    // <Text style={styles.helper}>Enter user@exmaple.com for proceeding further</Text>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    marginBottom:10,
    marginRight:10,
    marginLeft:10,
    marginTop:10

  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 16
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8
  },
  helper: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    textAlign: "left"
  }
});

export default MaterialRightIconTextbox;
