import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
 
  createSwitchNavigator,
  createAppContainer,
  SafeAreaView 

} from "react-navigation";


import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator  } from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';
import Home from './src/Home';
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import WalkThrough from './src/WalkThrough';
import Login from './src/Login';
import Scan from './src/Scan';
import Cart from './src/Cart';
import History from './src/History';
import Profile from './src/Profile';
import * as Font from 'expo-font';
// import Untitled from './src/components/Untitled';
import Login2 from './src/Login2';

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'bitter-bold': require('./assets/fonts/Bitter/Bitter-Bold.ttf'),
      'bitter-italic': require('./assets/fonts/Bitter/Bitter-Italic.ttf'),
      'bitter-regular': require('./assets/fonts/Bitter/Bitter-Regular.ttf'),
    });
  }

  render(){
      return (
             <AppContainer />
    
        
      );
  }
}





const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Lowe's Scanner",
        headerTitleStyle: {
          color: "white",
          fontFamily: 'bitter-italic',
          textAlign: "center",
          flex: 1
        },
        headerStyle: {
          backgroundColor: "#004990",
         
        },
        
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 25
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Scan")}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 25
            }}
          />
        )
      };
    }
  } ,

  Scan: {
        screen: Scan,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: "Scan a Product" ,
            headerTitleStyle: {
              color: "white",
              fontFamily: 'bitter-italic'
            },
            headerStyle: {
              backgroundColor: "#004990"
            },
            headerLeft: (
              <Icon
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white"
                size={30}
                style={{
                  paddingLeft: 25
                }}
              />
            ),
            headerRight: (
              <Icon
                onPress={() => navigation.navigate("Cart")}
                name="md-cart"
                color="white"
                size={30}
                style={{
                  paddingRight: 25
                }}
              />
            )
          };
        }
      } ,
    
      Cart: {
        screen: Cart,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: "Your added Products" ,
            headerTitleStyle: {
              color: "white",
              fontFamily: 'bitter-italic'
            },
            headerStyle: {
              backgroundColor: "#004990"
            },
            headerLeft: (
              <Icon
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white"
                size={30}
                style={{
                  paddingLeft: 25
                }}
              />
            ),
            headerRight:  null
            // (
            //   <Icon
            //     onPress={() => navigation.navigate("Cart")}
            //     name="md-cart"
            //     color="white"
            //     size={30}
            //     style={{
            //       paddingRight: 25
            //     }}
            //   />
            // )
          };
        }
      } ,
    


  History: {
    screen: History,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "History" ,
        headerTitleStyle: {
          color: "white",
          fontFamily: 'bitter-italic'
        },
        headerStyle: {
          backgroundColor: "#004990"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 25
            }}
          />
        ),
        headerRight: null
        // (
        //   <Icon
        //     onPress={() => navigation.navigate("Cart")}
        //     name="md-cart"
        //     color="white"
        //     size={30}
        //     style={{
        //       paddingRight: 25
        //     }}
        //   />
        // )
      };
    }
  } ,

 Profile:{
  screen: Profile ,
  navigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: "white" ,
        // fontWeight: 'bold',
        fontFamily: 'bitter-italic'
      },
      headerStyle: {
        backgroundColor: "#004990" ,
      },
      headerTitle: "Profile" ,
      headerLeft: null
      // (
      //   <Icon
      //   onPress={() => navigation.openDrawer()}
      //   name="md-menu"
      //   color="white"
      //   size={30}
      //   style={{
      //     paddingLeft: 30
      //   }}
      // />
      // )
      ,
      headerRight: (
        <Icon
          onPress={() => { navigation.navigate("Home")} }
          name="ios-close"
          color="white"
          size={30}
          style={{
            paddingRight: 25
          }}
        />
      ),
      gesturesEnabled: false
    };
  }

 },


//  Untitled: {
//   screen: Untitled,
//   navigationOptions: ({ navigation }) => {
//     return {
//       headerTitle: "Test" ,
//       headerTitleStyle: {
//         color: "white",
//         fontFamily: 'bitter-italic'
//       },
//       headerStyle: {
//         backgroundColor: "#004990"
//       },
//       headerLeft: (
//         <Icon
//           onPress={() => navigation.openDrawer()}
//           name="md-menu"
//           color="white"
//           size={30}
//           style={{
//             paddingLeft: 25
//           }}
//         />
//       ),
//       headerRight: null
//       // (
//       //   <Icon
//       //     onPress={() => navigation.navigate("Cart")}
//       //     name="md-cart"
//       //     color="white"
//       //     size={30}
//       //     style={{
//       //       paddingRight: 25
//       //     }}
//       //   />
//       // )
//     };
//   }
// } ,

})
  

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: wp("80%"),
    drawerPosition: "left" ,
    contentComponent: CustomDrawerComponent ,
    headerMode : 'none'
 
  }
);


const AppSwitchNavigator = createSwitchNavigator({
 
  StartUp: {
    screen: WalkThrough
  },
  // Register: {
  //   screen: Register
  // },
  Login : {
    screen : Login2
  },
  Home: {
    screen: HomeDrawNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
