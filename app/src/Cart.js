import React, { Component } from 'react'
import {View, Text,AsyncStorage} from 'react-native'
import { Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import * as handler from "./store/actions/main";
import Axios from 'axios'
class Cart extends Component {

    constructor(props){
        super(props)
        this.state={
            cartArr:{},
            disable:false
        }
        console.log('cart jkajshdkfjhkashd')
        console.log(this.props.cart)

        if(this.props.cart.length>0){
            this.setState({
                cartArr:this.props.cart
            })
        }
    //     AsyncStorage.getItem('cart')
    //     .then(req => JSON.parse(req))
    //   .then(json => {console.log('lkskdflkj'+json);
    //   console.log(json[0].id)
    //   this.setState({cartArr:json},()=>{
    //       console.log(this.state)
    //   })
    // })
    //   .catch(error => console.log('error!'));
    }
    proceedToPay = async() =>{
        console.log('make payment');
        // console.log(this.props.cart);
        let items=[],qty = [];

        this.setState({
            disable:true
        })

            var head = this.props.cart

            for(let Key in this.props.cart){
                // console.log(Key)
                items.push(Key)
                qty.push(head[Key])
            }

            for(let i in items){
                // console.log(items[i]);
                // console.log(qty[i])

                qty[i] = qty[i].quantity

            }
            console.log(items)

            console.log(qty)
            alert('Your Payment is Being Processed. Please bear with us... This may take some time')

            try{
                const payment = await Axios.post(`https://quiet-depths-08015.herokuapp.com/orders/makePurchase/`,{
                "id":"user@example.com",
                "items":items,
               "qty":qty
            })
            console.log(payment)

            this.props.clearCart();
            alert('Your Payment has been processed. Please show the products on your way out')

            }
            catch(err){
                alert('Payment Failed.. Please add the items again and try again')
            }

            
        
    }
    render() {
        
        let cartArray = [];
        // if(this.props.cart.length>0){
        //     cartArray = this.props.cart
        // }
        for(let key in this.props.cart){
            if(this.props.cart[key]!==undefined){
                cartArray.push(this.props.cart[key])
            }
        }

        return (
            <View
            style={{
                flex:1,
                flexDirection:'column',
            }}
            >
                    
                        {cartArray.map((element,index)=>{
                            return(
                                <View key={index}
                                    style={{
                                        borderColor:'black',
                                        borderWidth:2,
                                        marginBottom:5,
                                        marginLeft:8,
                                        marginTop:5,
                                        marginRight:8,

                                    }}
                                >
                                    <View
                                    style={{
                                        padding:20
                                    }}
                                    >
                                    <Text >
                                      {`\n Product Name: ${ element.name}`} 
                                      {` \nQuantity: ${element.quantity}`}
                                      {` \nUnit Price: ${element.price}`}
                                      {/* {element.name} */}
                                    </Text>
                                    
                                    <Ionicons name="md-trash" size={40} color="red"
                                        onPress={()=>{
                                            console.log(`delete product ${index}`);
                                            this.props.deleteItem(element.itemId)
                                        }}
                                        style={{
                                            marginLeft:'85%',
                                            marginTop:'-10%'
                                        }}
                                    />
                                    </View>
                                </View>
                            )
                        })}

                        <View>
                            {/* {this.state.cartArr.length!==0?
                            
                            <Button title={'Clear Cart'} 
                                onPress={async()=>{
                                    console.log('cart clearing attempted');
                                    try {
                                        // await AsyncStorage.removeItem('cart');
                                        // await AsyncStorage.setItem('isCartEmpty',true)
                                        this.setState({
                                            cartArr:[]
                                        },()=>{
                                            alert('All items dropped.')
                                        })

                                        // await AsyncStorage.setItem('cart',JSON.stringify([]))
                                        return true;
                                    }
                                    catch(exception) {
                                        return false;
                                    }
                                }}
                            />

                            
                            :<Text>No Items in cart</Text>} */}

                            {cartArray.length==0?<Text style={{alignSelf:'center'}}>No Items in cart</Text>:null}


                         <View>   
                            {cartArray.length>0?<Button title={'Drop entire Cart'}  onPress={()=>{this.props.clearCart()}}
                                    style={{
                                        backgroundColor:'red',
                                        marginBottom:20,
                                        marginTop:10
                                    }}
                                    disabled={this.state.disable}
                                    >
                                <Text
                                style={{
                                    flex:1,
                                    alignSelf:'center',
                                    left:'auto',
                                    alignContent:'center',
                                    textAlign:'center',
                                    bottom:0,
                                    color:'white',
                                    fontSize:26
                            
                                }}
                                >
                                    Clear Cart
                                </Text>
                            </Button>:null}


                            {cartArray.length>0?<Button
                                title={'Proceed To Pay'}
                                onPress={
                                    this.proceedToPay
                                }
                                style={{
                                    marginTop:10
                                }}
                                disabled={this.state.disable}
                            ><Text style={{ flex:1,
                                alignSelf:'center',
                                left:'auto',
                                alignContent:'center',
                                textAlign:'center',
                                bottom:0,
                                color:'white',
                                fontSize:26}}>Proceed To Pay</Text></Button>:null}


                        </View>
                        </View>
            </View>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      deleteItem: itemId => dispatch(handler.deleteItem(itemId)),
      addItem: item => dispatch(handler.addItem(item)),
      clearCart: () => dispatch(handler.clearCart())
    };
  };
  
  const mapStateToProps = state => {
    return {
      counter: state.cart.counter,
      cart: state.cart.cart,
      totalPrice: state.cart.totalPrice
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
  // export default ItemCard;
  