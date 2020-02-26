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
export default class App extends React.Component {
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
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#171941"
      
        },
        
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
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
              color: "white"
            },
            headerStyle: {
              backgroundColor: "#171941"
            },
            headerLeft: (
              <Icon
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white"
                size={30}
                style={{
                  paddingLeft: 10
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
                  paddingRight: 10
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
              color: "white"
            },
            headerStyle: {
              backgroundColor: "#171941"
            },
            headerLeft: (
              <Icon
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                color="white"
                size={30}
                style={{
                  paddingLeft: 10
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
            //       paddingRight: 10
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
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#171941"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
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
        //       paddingRight: 10
        //     }}
        //   />
        // )
      };
    }
  } ,










//   Category: {
//     screen: Category,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: "Doctor List" ,
//         headerTitleStyle: {
//           color: "white"
//         },
//         headerStyle: {
//           backgroundColor: "#171941"
//         },
//         headerLeft: (
//           <Icon
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             color="white"
//             size={30}
//             style={{
//               paddingLeft: 10
//             }}
//           />
//         ),
//         headerRight: (
//           <Icon
//             onPress={() => navigation.navigate("Home")}
//             name="md-cart"
//             color="white"
//             size={30}
//             style={{
//               paddingRight: 10
//             }}
//           />
//         )
//       };
//     }
//   } ,

  


//   Detail: {
//     screen: Detail,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitleStyle: {
//           color: "white"
//         },
//         headerStyle: {
//           backgroundColor: "#171941"
//         },
//         headerTitle: "Book Appointment",
//         headerLeft: null,
//         headerRight: (
//           <Icon
//             onPress={() => navigation.navigate("Category")}
//             name="ios-close"
//             color="white"
//             size={50}
//             style={{
//               paddingRight: 10
//             }}
//           />
//         ),
//         gesturesEnabled: false
//       };
//     }
//   },

//   // SlotPick: {
//   //   screen: SlotPick,
//   //   navigationOptions: ({ navigation }) => {
//   //     return {
//   //       headerTitleStyle: {
//   //         color: "white"
//   //       },
//   //       headerStyle: {
//   //         backgroundColor: "#5BBC9D"
//   //       },
//   //       headerTitle: navigation.state.params.date,
//   //       headerLeft: null,
//   //       headerRight: (
//   //         <Icon
//   //           onPress={() => navigation.navigate("Detail")}
//   //           name="ios-skip-backward"
//   //           color="white"
//   //           size={30}
//   //           style={{
//   //             paddingRight: 10
//   //           }}
//   //         />
//   //       ),
//   //       gesturesEnabled: false
//   //     };
//   //   }
//   // },
//   Record: {
//     screen: Record,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitleStyle: {
//           color: "white"
//         },
//         headerStyle: {
//           backgroundColor: "#171941"
//         },
//         headerTitle: "Health Record",
       
//         headerLeft: null,
//         headerLeft: (
//           <Icon
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             color="white"
//             size={30}
//             style={{
//               paddingLeft: 10
//             }}
//           />
//         ),
//         headerRight: (
//           <Icon
//             onPress={() => navigation.navigate("Home")}
//             name="ios-home"
//             color="white"
//             size={40}
//             style={{
//               paddingRight: 10
//             }}
//           />
//         ),
//         gesturesEnabled: false
//       };
//     }
//   },
  

//  FAQ:{
//   screen: FAQ,
//   navigationOptions: ({ navigation }) => {
//     return {
//       headerTitleStyle: {
//         color: "white" ,
       
//       },
//       headerStyle: {
//         backgroundColor: "#171941"
//       },
//       headerTitle: "FAQ" ,
//       headerLeft: null,
//       headerRight: (
//         <Icon
//           onPress={() => { navigation.navigate("Home")} }
//           name="ios-close"
//           color="white"
//           size={50}
//           style={{
//             paddingRight: 10
//           }}
//         />
//       ),
//       gesturesEnabled: false
//     };
//   }

//  } ,


 Profile:{
  screen: Profile ,
  navigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: "white" ,
       
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: "#171941" ,
       
        
      },
      headerTitle: "Profile" ,
      headerLeft: null,
      headerRight: (
        <Icon
          onPress={() => { navigation.navigate("Home")} }
          name="ios-close"
          color="white"
          size={50}
          style={{
            paddingRight: 10
          }}
        />
      ),
      gesturesEnabled: false
    };
  }

 }

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
    screen : Login
  },
  Home: {
    screen: HomeDrawNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
