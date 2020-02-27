import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";

class CustomDrawerComponent extends Component {


  render() {
    return (
      <View
        style={{
          flex: 1 
        }}
      >
        {/* <ImageBackground
          source={require("../../assets/sidedrawer.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "contain" ,
            
            
          }}
        > */}
          <View
            style={{
              flex: 1,
              backgroundColor:"#171941",
              paddingTop: wp("14%"),
              paddingHorizontal: wp("9.5%"),
              paddingBottom: wp("7%")
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Menu
              </Text>
              <Icon
                onPress={() => this.props.navigation.closeDrawer()}
                name="ios-close"
                color="white"
                size={50}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
                marginVertical: 20,
                padding: 5
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Home");
                  console.log('Home')
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-home" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Scan");
                  console.log('Scan ')
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-search" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  Scan a Product
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("History" );
                  console.log('History')
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-list-box" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  History
                </Text>
              </TouchableOpacity>
              
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("FAQ");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-cart" color="white" size={40} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400",
                    marginLeft: wp("4.5%")
                  }}
                >
                  FAQ
                </Text>
              </TouchableOpacity> */}
              
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity 
              onPress={() => {
                this.props.navigation.closeDrawer();
                this.props.navigation.navigate("Profile");
              }}
               
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View 
                  style={{
                    width: wp("20%"),
                    height: wp("20%"),
                    overflow: "hidden",
                    borderRadius: wp("10%"),
                    marginRight: wp("4.5%")
                  }}
                >
                  {/* <Image
                    source={require("../../assets/reviewer.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "contain"
                    }}
                  /> */}
                </View>
                <Text
               
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "400"
                  }}
                >
                  Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default CustomDrawerComponent;


