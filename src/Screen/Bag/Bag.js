import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Share
} from 'react-native';
import BagCard from '../../Component/bagCard';
import images from '../../constant/images';
import navigationStrings from '../../constant/navigationStrings';
import Snackbar from "react-native-snackbar"
export default class Bag extends Component {
  state = {
    itemList: [],
    bagTotal: 0,
    savings: 0,
    amountPaid: 0,
  };

  onShare = async () => {
    let itemListNew = []
    let {itemList} = this.state
    for(a in itemList){
      let newObject = {}
      newObject["name"] = itemList[a].name
      newObject["price"] = itemList[a].priceDiscounted
      newObject["quantity"] = itemList[a].quantity
      itemListNew.push(newObject)
    }
     
    let shareString = JSON.stringify(itemListNew)
    // console.log(itemListNew)   
    try {
      const result = await Share.share({
        message: shareString,
      });
    } catch (error) {
      alert(error.message);
    }
  };


  //================================================================================================================================
  //Add Listeners

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params) {
        let items = this.props.route.params.itemList;
        this.setState({itemList: items}, () => {
          this.setItems();
        });
      } else {
        console.log('Empty Array');
      }
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  //================================================================================================================================
  //Set Price Division Values


  setItems = () => {
    let itemList = this.state.itemList;
    let bagTotal = 0;
    let savings = 0;
    let amountPaid = 0;
    itemList.map((item, key) => {
      let savingAmount = item.priceOriginal - item.priceDiscounted;
      bagTotal = bagTotal + item.priceDiscounted * item.quantity;
      savings = savings + savingAmount * item.quantity;
    });
    amountPaid = bagTotal + 99;
    this.setState({
      bagTotal: bagTotal,

      savings: savings,

      amountPaid: amountPaid,
    });
  };

  //================================================================================================================================
  //Change quantity

  changeQuantity = (id, increment) => {
    let itemList = [...this.state.itemList];
    let index = itemList.findIndex((item) => item.id == id);
    console.log(itemList[index].quantity);
    if (itemList[index].quantity == 1 && increment == -1) {
      // this.removeElementAlert(id)
      return Snackbar.show({
        text: "Only 1 Quantity left !!",
        backgroundColor: "#3089b1",
        textColor: "#f0f4f7",
        duration: Snackbar.LENGTH_LONG
      })
    }
    itemList[index].quantity = itemList[index].quantity + increment;
    this.setState({itemList: itemList}, () => {
      this.setItems();
    });
  };

  render() {
    let {itemList, bagTotal, savings, amountPaid, item} = this.state;
    let {navigation} = this.props

    if (itemList.length == 0) {
      return (
        <View style={styles.container}>
          <View style={styles.containerEmptyNav}>
            <View>
              <Image
                style={styles.hamburgerIcon}
                source={images.HAMBURGERICON}
              />
            </View>
            <View>
              <Text style={styles.navHeading}>Stores</Text>
            </View>
            <View>
              <Image style={styles.navIcon} source={images.BELLICON} />
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.centerImage} source={images.BAG_ICON} />
            </View>
            <View style={styles.emptyPageTextBox}>
              <Text style={styles.emptyPageTextOne}>
                Your wishlist is empty
              </Text>
              <Text style={styles.emptyPageTextTwo}>
                Hang your wishes where you can make them come true
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: '30%',
                  paddingVertical: 15,
                  backgroundColor: 'black',
                  marginBottom: 15,
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate(navigationStrings.HOMESCREEN)}>
                <Text style={{color: 'white', alignSelf: 'center'}}>
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={addedItemStyles.navbar}>
            <View style={addedItemStyles.navbarIconContainer}>
              <Image style={addedItemStyles.navbarIcon} source={images.CROSS} />
              <Image style={addedItemStyles.navbarIcon} source={images.HEART} />
            </View>
            <Text style={addedItemStyles.navbarTopText}>
              {' '}
              Bag{' '}
              <Text style={addedItemStyles.navbarTextTwo}>
                {' '}
                (
                {itemList.length > 1 ? (
                  <Text>{itemList.length} Products</Text>
                ) : (
                  <Text>{itemList.length} Product</Text>
                )}
                )
              </Text>{' '}
            </Text>
          </View>
          <ScrollView>
            <View style={{padding: 25, paddingBottom: 0}}>
              <View>
                {itemList.map((item, key) => {
                  return (
                    <BagCard
                    key = {key}
                      item={item}
                      changeQuantity={this.changeQuantity}
                    />
                  );
                })}
              </View>
            </View>
            <View style={addedItemStyles.textRow}>
              <View>
                <Text style={addedItemStyles.textRowText}>
                  Assured Quality |{' '}
                </Text>
              </View>
              <View>
                <Text style={addedItemStyles.textRowText}>
                  {' '}
                  100% Handpicked |{' '}
                </Text>
              </View>
              <View>
                <Text style={addedItemStyles.textRowText}> Easy Exchange</Text>
              </View>
            </View>

            <View style={addedItemStyles.couponRow}>
              <View style={addedItemStyles.couponLeft}>
                <Image
                  style={addedItemStyles.couponImage}
                  source={images.COUPON}
                />
                <Text style={{marginLeft: 15, marginTop: -3}}>
                  Apply coupon
                </Text>
              </View>
              <View style={{marginRight: 15}}>
                <Text style={addedItemStyles.couponRightText}>Select</Text>
              </View>
            </View>
            <View style={addedItemStyles.orderDetailSection}>
              <Text style={addedItemStyles.orderHeading}>Order Details</Text>
              <View style={addedItemStyles.orderDetailRow}>
                <Text>Bag Total</Text>
                <Text
                  style={[addedItemStyles.couponRightText, {color: 'black'}]}>
                  Rs. {bagTotal}
                </Text>
              </View>
              <View style={addedItemStyles.orderDetailRow}>
                <Text>Bag Savings</Text>
                <Text
                  style={[addedItemStyles.couponRightText, {color: '#29b07d'}]}>
                  Rs. {savings}
                </Text>
              </View>
              <View style={addedItemStyles.orderDetailRow}>
                <Text>Coupon Savings</Text>
                <Text style={addedItemStyles.couponRightText}>
                  Apply coupon
                </Text>
              </View>
              <View style={addedItemStyles.orderDetailRow}>
                <Text>Delivery</Text>
                <Text>Rs. 99</Text>
              </View>
              <View style={addedItemStyles.orderDetailRow}>
                <Text style={addedItemStyles.total}>Total Amount</Text>
                <Text style={addedItemStyles.total}>Rs. {amountPaid}</Text>
              </View>
              {/* <Text>{savings} {bagTotal}</Text> */}
            </View>
            <View style = {addedItemStyles.checkOutDiv}>
                <TouchableOpacity style = {addedItemStyles.shareButton}
                onPress = {this.onShare}
                >
                  <Text style = {addedItemStyles.shareText}>
                    Share
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {addedItemStyles.orderButton}
                onPress = {()=>navigation.navigate(navigationStrings.CHECKOUT, {orderAmount: amountPaid})}
                >
                  <Text style = {addedItemStyles.orderText}>
                  Check out
                  </Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  containerEmptyNav: {
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  navHeading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    marginHorizontal: 5,
    marginVertical: 0,
  },
  bodyContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  emptyPageTextBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyPageTextTwo: {
    marginTop: 10,
    fontSize: 14,
    marginBottom: 18,
  },
  emptyPageTextOne: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const addedItemStyles = StyleSheet.create({
  navbar: {
    height: 100,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  navbarIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  navbarIcon: {
    width: 40,
    height: 40,
  },
  navbarTopText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  navbarTextTwo: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  textRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textRowText: {
    color: '#a4a4a4',
    fontWeight: 'bold',
  },
  couponRow: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginTop: 20,
  },
  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponImage: {
    width: 35,
    height: 35,
  },
  couponRightText: {
    fontWeight: 'bold',
    color: '#3089b1',
  },
  orderDetailSection: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
  },
  orderHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#444',
    paddingVertical: 10,
  },
  orderDetailRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  total: {
    fontWeight: "bold",
    fontSize: 16
  },
  checkOutDiv:{
    height: 60, backgroundColor: "#f0f4f7", justifyContent: "space-around", flexDirection: "row", alignItems: "center" 
  },
  shareButton:{ flex: 0.3 ,height: 40, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 10},
  shareText: {fontWeight: "bold"},
  orderButton:{ flex: 0.5 ,height: 40, backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 10},
  orderText:{color: "white", fontWeight: "bold"}
});

{
  /* <View style = {{flex: 1, backgroundColor: "#f0f4f7"}}>
<View style = {{height: 100, backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15}}>
  <View >
    <Image style = {{width: 50, height: 50}} source = {images.CROSS} />
  </View>
  <View>
    <Image style = {{width: 50, height: 50}} source = {images.HEART} />
  </View>
<Text style = {{fontSize: 16, fontWeight: "bold"}}> Bag <Text style = {{fontSize: 16, fontWeight: "normal"}}>{ itemList.length > 1 ? <Text> {itemList.length} Products </Text> : <Text>{itemList.length} Product</Text> }</Text> </Text>
</View>
</View> */
}
