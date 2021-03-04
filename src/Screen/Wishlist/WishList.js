import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigationStrings from "../../constant/navigationStrings"
export default class WishList extends Component {
  render() {
    let {navigation} = this.props
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 100, height: 100, marginBottom: 10}}
            source={require('./wishlist.jpg')}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
            Your wishlist is empty
          </Text>
          <Text style={{marginTop: 10, fontSize: 14, marginBottom: 18}}>
            Hang your wishes where you can make them come true
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
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
            onPress = {()=> navigation.navigate("HOME")}
            >
            <Text style={{color: 'white', alignSelf: 'center'}}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
