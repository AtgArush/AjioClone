import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import images from '../../constant/images';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import {scrollInterpolator, animatedStyles} from '../../../utils/animations';
import navigationStrings from '../../constant/navigationStrings';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);


export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  _renderItem({item}) {
    return (
      <Image
        style={{width: '100%', height: 420, resizeMode: 'contain'}}
        source={{uri: item}}
      />
    );
  }

  render() {
    console.log(this.props.route.params)
    let {navigation} = this.props
    let {
      name,
      descriptionShort,
      priceDiscounted,
      priceOriginal,
      discount,
      frontImage,
      imageArray,
    } = this.props.route.params.product;
    let {product} = this.props.route.params
    console.log(navigation)
    return (
      <View style={{backgroundColor: 'white'}}>
        <View
          style={styles.topBar}>
          <View>
            <TouchableOpacity
              style={styles.topBarRightImage}
              >
              <Image
                style={[{resizeMode: "contain"}, styles.topBarRightImage]}
                source={images.HAMBURGERICON}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.topBarRightImage}
              source={images.SEARCH}
            />
            <Image
              style={styles.topBarRightImage}
              source={images.HEART}
            />
            <Image
              style={styles.topBarRightImage}
              source={images.CART}
            />
          </View>
        </View>
        <ScrollView >
          <View>
            <Carousel
              style={{height: 440}}
              ref={(c) => (this.carousel = c)}
              data={imageArray}
              renderItem={this._renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              containerCustomStyle={styles.carouselContainer}
              inactiveSlideShift={0}
              onSnapToItem={(index) => this.setState({index})}
              scrollInterpolator={scrollInterpolator}
              slideInterpolatedStyle={animatedStyles}
              useScrollView={true}
            />
          </View>

          <View
            style={styles.productDetails}>
            <View>
              <Text style={styles.productDetails}>
                {name}
              </Text>
              <Text style={styles.productDescription}>
                {descriptionShort}
              </Text>
            </View>
            <View>
            <Text
                style={styles.productName}>
                6 colors
              </Text>
            </View>
          </View>
          <View
            style={styles.priceSection}>
            <Text
              style={styles.price}>
              Rs. {priceDiscounted}
            </Text>
            <Text
              style={styles.priceOriginal}>
              Rs. {priceOriginal}
            </Text>
            <Text style={styles.discount}>
              {discount}% OFF
            </Text>
          </View>
          <Text style={styles.priceBottom}>
            Price inclusive of all taxes
          </Text>
          <View style={styles.emptyView}></View>
          <View style={{marginVertical: 15}}>
            <Text
              style={styles.sectionHead}>
              Color
            </Text>
            <View
              style={styles.colorBox}>
              <View
                style={styles.colorContainer}>
                <Text style={styles.colorText}>Black</Text>
                <View
                  style={styles.colorCircle}></View>
              </View>
              <View
                style={styles.colorContainer}>
                <Text
                  style={[styles.colorText ,{
                    color: '#bb0000',
                  }]}>
                  Red
                </Text>
                <View
                  style={[styles.colorCircle ,{
                    backgroundColor: '#bb0000',
                  }]}></View>
              </View>
              <View
                style={styles.colorContainer}>
                <Text
                  style={[styles.colorText ,{
                    color: '#ff5f1f',
                  }]}>
                  Orange
                </Text>
                <View
                  style={[styles.colorCircle ,{
                    backgroundColor: '#ff5f1f',
                  }]}></View>
              </View>
              <View
                style={styles.colorContainer}>
                <Text
                  style={[styles.colorText ,{
                    color: '#010080',
                  }]}>
                  Blue
                </Text>
                <View
                  style={[styles.colorCircle ,{
                    backgroundColor: '#010080',
                  }]}></View>
              </View>
              <View
                style={styles.colorContainer}>
                <Text
                  style={[styles.colorText ,{
                    color: '#21130d',
                  }]}>
                  Brown
                </Text>
                <View
                  style={[styles.colorCircle ,{
                    backgroundColor: '#21130d',
                  }]}></View>
              </View>
            </View>
          </View>
          <View style={styles.emptyView}></View>
          <View style={styles.productDetailSection}>
            <View
              style={styles.productContainer}>
              <Text style={styles.productDetailHeading}>
                Product Details
              </Text>
              <Text
                style={styles.productRight}>
                + View More
              </Text>
            </View>
            <View style={{marginVertical: 15}}>
              <Text style={styles.productDetailPoints}>
                Wipe with a clean and dry cloth when needed
              </Text>
              <Text style={styles.productDetailPoints}>
                PU upper and sole
              </Text>
              <Text style={styles.productDetailPoints}>
                Velcro fastening
              </Text>
              <Text style={styles.productDetailPoints}>
                1 month warranty
              </Text>
            </View>
          </View>
          <TouchableOpacity style = {styles.returnButton} onPress = {()=> navigation.navigate(navigationStrings.HOMESCREEN, {item: product})} >
            <Text style = {styles.returnButtonText}>Add Item</Text>
          </TouchableOpacity>
          <View style={styles.emptyView}></View>
          <View style={styles.productContainer}>
            <Text style={styles.productDetailHeading}>
              Returns
            </Text>
            <Text style={styles.returnPolicy}>
              Easy 30 day return and exchange.Return policy may vary based on
              the products and promotions.Full details available with the
              product about the return policies.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topBar:{
    height: 65,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  topBarRightImage:{
    height: 30, width: 30
  },
  topLeftImage:{
    resizeMode: 'contain',
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginVertical: 0,
  },
  productDetails:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 20, color: '#444', fontWeight: 'bold'
  },
  productDescription:{
    fontSize: 15, color: '#888'
  },
  productRight:{
    color: '#589fd3', marginLeft: -45, fontWeight: 'bold'
  },
  priceSection:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  price:{
    fontSize: 18,
    marginRight: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  priceOriginal:{
    fontSize: 14,
    marginRight: 15,
    textDecorationLine: 'line-through',
    color: '#555',
  },
  discount:{
    fontSize: 16, marginRight: 15, color: '#1db078'
  },
  priceBottom:{
    fontSize: 11, marginBottom: 15, paddingHorizontal: 20
  },
  emptyView:{
    height: 10, backgroundColor: '#f0f4f7'
  },
  sectionHead:{
    color: '#555',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  colorBox:{
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  colorContainer:{
    marginRight: 15,
    display: 'flex',
    alignItems: 'center',
  },
  colorText:{
    fontWeight: 'bold', marginBottom: 5
  },
  colorCircle:{
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'black',
  },
  productDetailSection:{
    paddingHorizontal: 20, paddingVertical: 25
  },
  productContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetailHeading:{
    fontWeight: 'bold', fontSize: 22, color: '#555'
  },
  productRight:{
    fontWeight: 'bold', fontSize: 15, color: '#589fd3'
  },
  productDetailPoints:{
    marginBottom: 5, marginLeft: 5
  },
  returnPolicy:{
    marginVertical: 15, marginLeft: 5, color: '#555'
  },
  returnButton: {
    width: "50%",
    marginLeft: "25%",
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  returnButtonText:{
    color:"white",
    alignSelf: "center",
    fontWeight:"bold",
    fontSize: 16
  }
});
