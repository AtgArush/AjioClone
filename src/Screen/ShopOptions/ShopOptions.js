import React, {Component} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../constant/images';
import navigationStrings from '../../constant/navigationStrings';
export default class ShopOptions extends Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          name: 'Women',
          image: 'ONE',
          left: true,
        },
        {
          name: 'Men',
          image: 'TWO',
          left: true,
        },
        {
          name: 'Kids',
          image: 'THREE',
          left: true,
        },
        {
          name: 'Indie',
          image: 'FOUR',
          left: true,
        },
        {
          name: 'Home And Kitchen',
          image: 'FIVE',
          left: true,
        },
        {
          name: 'Precious Jewellery',
          image: 'SIX',
        },
        {
          name: 'Stores',
          image: 'SEVEN',
        },
        {
          name: 'New Arrivals',
          image: 'EIGHT',
        },
        {
          name: 'Sneakerhood',
          image: 'NINE',
        },
        {
          name: 'Collections',
          image: 'TEN',
        },
      ],
    };
  }

  renderFunc = ({item, key}) => {
    return (
      <View
      key = {key}
        style={styles.optionRow}>
        <View
          style={styles.optionRowRight}>
          <Image style={styles.rightImage} source={images[item.image]} />
          <Text style={{marginLeft: 10}}>{item.name}</Text>
        </View>
        {item.left && <Image source={images.ARROWRIGHT} />}
      </View>
    );
  };

  render() {
    let {listItems} = this.state;
    let {navigation} = this.props;
    return (
      <View style={styles.root}>
        <View
          style={styles.navbar}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.crossImage}
                source={images.CROSS}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.ajioImage}
              source={images.AJIOTOP}
            />
          </View>
          <View style={styles.rightSectionImages}>
            <Image
              style={styles.rightImage}
              source={images.HOME}
            />
            <Image
              style={styles.rightImage}
              source={images.SEARCH}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
          <Text style={{fontSize: 20, marginBottom: 15}}>Shop Now</Text>
          <FlatList
            data={listItems}
            renderItem={this.renderFunc}
            style={{backgroundColor: 'white', borderRadius: 10}}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    height: 2,
                    backgroundColor: '#f0f4f7',
                    marginHorizontal: 35,
                  }}></View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex: 1, backgroundColor: '#f0f4f7'
  },
  navbar:{
    height: 55,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  crossImage:{
    resizeMode: 'contain',
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginVertical: 0,
  },
  ajioImage:{
    resizeMode: 'contain',
    height: 45,
    width: 75,
    marginHorizontal: 5,
    marginVertical: 0,
    marginLeft: 45,
  },
  rightSectionImages:{
    display: 'flex', flexDirection: 'row'
  },
  rightImage:{
    resizeMode: 'contain',
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginVertical: 0,
  },
  optionRow:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,
    paddingLeft: 10,
    paddingVertical: 15,
  },
  optionRowRight:{
    display: 'flex', flexDirection: 'row', alignItems: 'center'
  },
  rightmage:{
    height: 40, width: 40
  }
})