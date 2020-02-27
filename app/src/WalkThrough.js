import React, { Component } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

import { StyleSheet, Text, View, Button, BackHandler } from 'react-native';

export default class WalkThrough extends Component {
    constructor(props){
        super(props)
        this.state = {
            // show_Main_App: false,
            // hasPermission: null,
            // // type: Camera.Constants.Type.back,
            // scanned:false,
            // reqScan:false,
        };
    }

    on_Skip_slides = () => {
        // this.setState({ show_Main_App: true });
        this.props.navigation.navigate("Login");
        console.log('skip')
      }

      on_Done_all_slides = () => {
        // this.setState({ show_Main_App: true });
        this.props.navigation.navigate("Login");
        console.log('done')
      };
    render() {
        const slides = [
            {
              key: 'k1',
              title: 'Ecommerce Leader',
              text: 'Best ecommerce in the world',
              image: {
                uri:
                  'https://i.imgur.com/jr6pfzM.png',
              },
              titleStyle: styles.title,
              textStyle: styles.text,
              imageStyle: styles.image,
              backgroundColor: '#F7BB64',
            },
            // {
            //   key: 'k2',
            //   title: 'fast delivery',
            //   text: 'get your order insantly fast',
            //   image: {
            //     uri:
            //       'https://i.imgur.com/au4H7Vt.png',
            //   },
            //   titleStyle: styles.title,
            //   textStyle: styles.text,
            //   imageStyle: styles.image,
            //   backgroundColor: '#F4B1BA',
            // }
            // ,
            {
              key: 'k3',
              title: 'Many store ',
              text: 'Multiple store location',
              image: {
                uri: 'https://i.imgur.com/bXgn893.png',
              },
              titleStyle: styles.title,
              textStyle: styles.text,
              imageStyle: styles.image,
              backgroundColor: '#4093D2',
            },
            {
              key: 'k4',
              title: '24 hours suport',
              text: ' Get Support 24 Hours with Executives',
              image: {
                uri: 'https://i.imgur.com/mFKL47j.png',
              },
              titleStyle: styles.title,
              textStyle: styles.text,
              imageStyle: styles.image,
              backgroundColor: '#644EE2',
            }
          ];

        return (
            <AppIntroSlider slides={slides} onDone={this.on_Done_all_slides} 
            showSkipButton={true} 
            onSkip={this.on_Skip_slides} /> 
        )
    }
}


const styles = StyleSheet.create({
    MainContainer: { 
     flex: 1, 
     paddingTop: 20, 
     alignItems: 'center', 
     justifyContent: 'center', 
     padding: 20 
    }, 
    title: { 
     fontSize: 26, 
     color: '#fff', 
     fontWeight: 'bold', 
     textAlign: 'center', 
     marginTop: 20, 
    }, 
    text: { 
     color: '#fff', 
     fontSize: 20, 
    }, 
    image: { 
     width: 200, 
     height: 200, 
     resizeMode: 'contain' 
    } ,
    camera:{
      width: '80%', 
     height: '80%', 
    //  resizeMode: 'contain' 
    flex: 1, 
     paddingTop: 20, 
     alignItems: 'center', 
     justifyContent: 'center', 
     marginLeft:35,
    //  padding: 20
    },
    backButton:{
      marginTop:30,
  
    }
  });