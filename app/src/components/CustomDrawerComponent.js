import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  AsyncStorage
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
// import Login2 from "../Login";

class CustomDrawerComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'Dummy',
      imgsrc:'../../assets/profile.png'
    }
  }

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
                    marginRight: wp("3%"),
                    marginTop:60
                  }}
                >
                  <Image
                    source={require('../../assets/profile.png')}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "contain"
                    }}
                  />
                </View>
                <Text
               
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontWeight: "400",
                    marginTop:60
                  }}
                >
                  {this.state.name}
                </Text>
              </TouchableOpacity>






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
                <Icon name="ios-home" color="white" size={35} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    marginLeft: wp("3%")
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
                <Icon name="ios-search" color="white" size={35} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    marginLeft: wp("3%")
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
                <Icon name="ios-list-box" color="white" size={35} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    marginLeft: wp("3%")
                  }}
                >
                  History
                </Text>
              </TouchableOpacity>




              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer();
                  this.props.navigation.navigate("Untitled");
                  console.log('Test')
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 5
                }}
              >
                <Icon name="ios-list-box" color="white" size={35} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    marginLeft: wp("3%")
                  }}
                >
                  History
                </Text>
              </TouchableOpacity> */}




              
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
                <Icon name="ios-cart" color="white" size={35} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    marginLeft: wp("3%")
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

              <Icon
              style={{
                left:'auto',
                alignItems:'center',
                alignSelf:'center',
                textAlign:'center',
                // marginLeft:'auto'
              }}
              onPress={async()=>{
                const logout = await AsyncStorage.removeItem('username')
                this.props.navigation.navigate("Login")
              }}
              name="ios-log-out" color="red" size={45} />

            </View>
          </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default CustomDrawerComponent;


