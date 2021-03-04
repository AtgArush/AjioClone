import React from 'react'
import {View, Image, Text, TouchableOpacity} from "react-native"
export default function BagCard(item) {
    console.log(item.item)
    let {name, descriptionShort, priceDiscounted, priceOriginal, discount,frontImage} = item.item
    return (
        <View style = {{borderRadius: 15, marginBottom: 12, backgroundColor: "white",}}>
        <View style = {{height: 140, display: "flex", flexDirection: "row", padding: 10,  borderBottomWidth: 0.5, borderBottomColor: "#777",borderRadius: 15}}>
            <Image style = {{height: 120, width: 100}} source = {{uri: frontImage}} />
            <View style = {{marginLeft: 15}}>
                <Text style = {{color: "#777", fontWeight: "bold", fontSize: 20, width: 400}} numberOfLines={1}>{name}</Text>
                <Text style = {{color: "#999", fontWeight: "normal", fontSize: 14, marginBottom: 15 }}>{descriptionShort}</Text>
                <Text>
                    <Text style = {{colr: "#2a2a2a", fontSize: 14, fontWeight: "bold"}}>Rs. {priceDiscounted} </Text>
                    <Text style = {{fontSize: 14,textDecorationLine:"line-through", color: "#999"}}> Rs. {priceOriginal} </Text>
                    <Text style = {{fontSize: 14, color: "#999"}}> ({discount}%) </Text>
                </Text>
                <Text style = {{fontSize: 14, color: "#1db078", fontWeight: "bold"}}>You save Rs. {priceOriginal - priceDiscounted}</Text>
            </View>
        </View>
        <View style = {{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
            <TouchableOpacity style = {{width: "20%", paddingVertical: 15}}>
                <Text style = {{fontWeight: "bold", color: "#3089b1"}}>Remove</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
