import React from 'react';
import {TextInput, View, Image} from 'react-native';

export default function InputField({imageLabel, getInputValue, textLabel}) {
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginBottom: 15, alignItems: "flex-end"}}>
      <Image style = {{height: 40, width: 40, marginRight: 25}} source = {imageLabel} />
      <TextInput
        onChangeText={(value) => getInputValue(value, textLabel)}
        placeholder = {textLabel}
        style={{
          flex: 0.7,
          backgroundColor: '#eee',
          paddingLeft: 5,
          color: 'black',
          height: 50,
          borderBottomColor: "#555",
          borderBottomWidth: 2 
        }}></TextInput>
    </View>
  );
}
