import React, { Component } from 'react'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, Text, View, Button, BackHandler, Modal, Alert, TouchableHighlight, AsyncStorage } from 'react-native';
import Axios from 'axios'
import ItemCard from './ItemCard';
import { Ionicons } from '@expo/vector-icons';

export default class Scanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            show_Main_App: false,
            hasPermission: null,
            type: Camera.Constants.Type.back,
            scanned:false,
            modalVisible: false,
            item:{},
            itemsArray:[]
            
        };

        
        
    }
    async componentDidMount(){
      const status = await Camera.requestPermissionsAsync();
      console.log(status)
      this.setState({
        hasPermission: status === 'granted'
      },
      ()=>{
        console.log(this.state);
        // alert('Please reload this page ')
      })
    }

    addItemsToCart =  (obj)=>{
      // AsyncStorage.setItem('cart', JSON.stringify([]))
      console.log('req to add items to cart')
      console.log(obj)
    //   AsyncStorage.getItem('cart')
    //     .then(req => JSON.parse(req))
    //   .then(json => {console.log('lkskdflkj'+json);
    //   // console.log(json[0].id)

    //   this.setState({itemsArray:json},()=>{
    //       console.log(this.state)
    //   })
    // })
    //   .catch(error => console.log('error!'));
      let arr = [...this.state.itemsArray,obj];
      this.setState({
        itemsArray:arr
      },()=>{
        // AsyncStorage.setItem('cart', JSON.stringify(this.state.itemsArray))
        //   .then(json => console.log('success!'))
        //   .catch(error => console.log('error!'));

          })
      

    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    handleBarCodeScanned =async ({ type, data }) => {
      this.setState({scanned:true})
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      try{
      const item = await Axios.get(`http://192.168.43.25:3000/items/${data}`)
      console.log(item.data.item.id);
      
      // alert(`<View>${item.data.item.id}</View>`);
      this.setState({
        modalVisible: !this.state.modalVisible,
        item:item.data.item
      })

      

      }
      catch(err){
        console.log(err)
        // alert('No product registered with this barcode/qrcode')
      }
      

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

            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                // alert('Modal has been closed.');
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={styles.modal}
              >
              <View style={{}}>

                <View
                style={{
                  flex:1,
                }}
                >
                  <Text
                  style={{
                    fontSize:20
                  }}
                  >
                    You Scanned : 
                  </Text>
                 
                </View>

                <View>
                    {/* <Text>{this.state.item.id}</Text>
                    <Text>{this.state.item.unit_price}</Text>
                    <Text>{this.state.item.name}</Text> */}

                  <ItemCard 
                  style={styles.ItemCard}
                  name = {this.state.item.name}
                  unit_price = {this.state.item.unit_price}
                  id = {this.state.item.id}
                  addItemsArray={this.addItemsToCart}
                  >

                  </ItemCard>


                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    {/* <Text>Hide Modal</Text> */}
                    {/* <Button title={'Hide Modal' }
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={{
                      // flex:1,
                      justifyContent:'flex-end'
                    }}
                    /> */}
                     <Ionicons
                        style={{
                          // flex:1,
                          justifyContent:'flex-end',
                          alignItems:'center',
                          textAlign:'center',
                          alignSelf:'center',
                          left:'auto',

                        }}
                        name="md-close" size={40} color="red" />
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

           
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
  
    },
    modal:{
      flex: 1,
      padding:20
    },
    ItemCard:{
      width: 340,
      height: 200,
      marginTop: 40,
      marginBottom:20,
      alignSelf: "center"
    }
  });