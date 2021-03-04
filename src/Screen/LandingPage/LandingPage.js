import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import navigationStrings from '../../constant/navigationStrings';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {navigation} = this.props;
    return (
      <View style = {{flex: 1}}>
        <View style = {styles.topBar}>
          <View>
            <Text style = {styles.heading}>AJIO</Text>
          </View>
          <View style = {{paddingLeft: 15}}>
          <Text style = {styles.subhead}>doubt is out</Text>
          </View>

        </View>
        <View style = {{height: 580}}>
        <Text style = {styles.bodyHead}>Hello there user</Text>
        <View style = {styles.buttonBox}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => navigation.navigate(navigationStrings.LOGINUSERNAME)}
          >
            <Text style = {styles.buttonText}
            >LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style = {{alignItems: "center", marginTop:30}}>
            <View style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <View style = {{flex: 0.44, height: 2, backgroundColor: "#555"}}></View>
                <Text style = {{marginHorizontal: 25}}>OR</Text>
                <View style = {{flex: 0.44, height: 2, backgroundColor: "#555"}}></View>
            </View>
        </View>
        <View style = {styles.buttonText}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
          >
            <Text style = {styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar:{
    height: 350, backgroundColor: "#fe4a56", borderBottomRightRadius: 80
  },
  heading:{
    marginTop: 90, color: "white", fontSize: 65, fontWeight: "bold", alignSelf: "center"
  },
  subhead:{
    color: "#eee", fontSize: 45, fontWeight: "bold", marginBottom: 40, alignSelf: "center"
  },
  bodyHead:{
    color: "#fe4a56", fontSize: 35, fontWeight: "bold", marginTop: 40, marginLeft: 15
  },
  buttonBox:{
    backgroundColor: "#fe4a56", marginTop: 50, marginHorizontal: 30, paddingVertical: 16, borderRadius: 10
  },
  buttonText:{
    color: "white", fontSize: 20, fontWeight: "bold"
  }
})