import React, { Component } from 'react'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, Text, View, Button, BackHandler } from 'react-native';

export default class Scanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            show_Main_App: false,
            hasPermission: null,
            type: Camera.Constants.Type.back,
            scanned:false,
            
        };
    }

    handleBarCodeScanned = ({ type, data }) => {
      this.setState({scanned:true})
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    render() {
        return (
            <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              
            }}
            >
              {/* <Button
              style={{marginTop:30}}
            title={'BackHandler'} onPress={()=>this.setState({
              reqScan:false,
            })} /> */}
            
            <BarCodeScanner
              onBarCodeScanned={
                this.state.scanned ? undefined : 
                this.handleBarCodeScanned}
              // onBarCodeScanned = {this.handleBarCodeScanned}
              style={styles.camera}
            >
            
    
              </BarCodeScanner>
              
            {this.state.scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned:false})} />}
           
          </View>
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