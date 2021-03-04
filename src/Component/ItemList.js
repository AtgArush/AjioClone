import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
export default function ItemList(props) {
  let {item, addItem, removeItem, addedItem} = props
  return (
    <View style={{width: '46%', marginBottom: 5, marginHorizontal: '2%'}}>
      <Image
        style={{width: '100%', height: 240, borderRadius: 15}}
        source={{uri: item.frontImage}}
      />
      <View style={{marginVertical: 10, marginLeft: 15}}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 15,
            color: '#777',
            fontWeight: 'bold',
            marginBottom: 7,
          }}>
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{fontSize: 12, color: '#777', marginBottom: 7, height: 35}}>
          {item.descriptionShort}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold', fontSize: 13}}>Rs. {item.priceDiscounted}</Text>{' '}
          <Text
            style={{
              textDecorationLine: 'line-through',
              color: '#777',
              fontSize: 11,
            }}>
            {' '}
            {item.pricepriceOriginal}
          </Text>{' '}
          <Text style={{color: '#1db078', fontSize: 13}}>{item.discount}% OFF</Text>{' '}
        </Text>
      </View>
    </View>
  );
}
