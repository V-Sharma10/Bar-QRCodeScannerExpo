import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import * as handler from "./store/actions/main.js";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArr: []
    };
    console.log("cart jkajshdkfjhkashd");
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

  render() {
    let cartArray = [];
    for (let key in this.props.cart) {
      if (this.props.cart[key] !== undefined) {
        cartArray.push(this.props.cart[key]);
      }
    }
    console.log("cart array");
    console.log(cartArray);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        {cartArray.map((element, index) => {
          return (
            <View key={index}>
              <Text>
                {`\n Product Id: ${element.itemId}`}
                {` \nQuantity: ${element.quantity}`}
              </Text>
              <Ionicons
                name="md-trash"
                size={40}
                color="red"
                onPress={() => {
                  console.log(`delete product ${element.itemId}`);
                  this.props.deleteItem(element.itemId);
                }}
                style={{
                  marginLeft: "80%"
                }}
              />
            </View>
          );
        })}

        <View>
          {cartArray.length !== 0 ? (
            <Button
              title="Clear Cart"
              onPress={async () => {
                console.log("cart clearing attempted");
                try {
                  // await AsyncStorage.removeItem('cart');
                  // await AsyncStorage.setItem('isCartEmpty',true)
                  this.props.clearCart();
                  this.setState(
                    {
                      cartArr: []
                    },
                    () => {
                      alert("All items dropped.");
                    }
                  );

                  // await AsyncStorage.setItem('cart',JSON.stringify([]))
                  return true;
                } catch (exception) {
                  return false;
                }
              }}
            />
          ) : (
            <Text>No Items in cart</Text>
          )}
        </View>
      </View>
    );
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
