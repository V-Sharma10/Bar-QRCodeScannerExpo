import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";
import * as handler from "../store/actions/main.js";
import { Ionicons } from "@expo/vector-icons";
class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      id: this.props.id
    };

    console.log(this.props);
  }
  add = () => {
    let Prdocutmodel = {
      itemId: this.props.id,
      price: this.props.unit_price,
      name: this.props.name
    };
    this.props.addItem(Prdocutmodel);

    console.log("+ ==================== +");

    console.log(this.props.cart);
    console.log("====================");
  };

  delete = () => {
    this.props.deleteItem(this.props.id);

    console.log("+ ==================== ----");

    console.log(this.props.cart);
    console.log("====================");
  };

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>{this.props.name}</Text>
            <Text style={styles.subtitleStyle}>₹ {this.props.unit_price}</Text>
          </View>
          <Image
            source={require("../../assets/lowes_icon.png")}
            style={styles.cardItemImagePlace}
          ></Image>
        </View>
        <View style={styles.actionBody}>
          <View>
            {/* <TouchableOpacity style={styles.actionButton1}> */}
            <Text style={styles.actionText1} onPress={this.add}>
              +
            </Text>
            {/* </TouchableOpacity> */}
          </View>
          <View>
            <Text
              style={{
                // height: 36,
                padding: 0,
                fontSize: 40
              }}
            >
              {this.props.id &&
              this.props.cart[this.props.id] &&
              this.props.cart[this.props.id].quantity
                ? this.props.cart[this.props.id].quantity
                : 0}
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity style={styles.actionButton2}> */}
            <Text style={styles.actionText2} onPress={this.delete}>
              -
            </Text>
            {/* </TouchableOpacity> */}
          </View>
          <View
            style={{
              marginLeft: 50
            }}
          >
            <Ionicons
              onPress={() => {
                console.log("Added to cart");
                console.log(this.state);

                this.props.addItemsArray(this.state);

                alert(`Your Product has been added to cart.`);
              }}
              name="md-cart"
              size={60}
              color="green"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 120,
    height: 120,
    backgroundColor: "#ccc",
    margin: 3
  },
  actionBody: {
    flex: 1,
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 16,
    padding: 8,
    left: "auto",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  actionText1: {
    color: "#000",
    opacity: 0.9,
    fontSize: 40,
    left: "auto",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingRight: 30,
    paddingLeft: 30
  },
  actionButton2: {
    height: 16,
    padding: 8,
    left: "auto",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  actionText2: {
    color: "#000",
    opacity: 0.9,
    fontSize: 40,
    left: "auto",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingRight: 30,
    paddingLeft: 30
  }
});

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
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
// export default ItemCard;
