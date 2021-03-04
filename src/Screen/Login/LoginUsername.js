import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import navigationStrings from '../../constant/navigationStrings';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      login: false,
    };
  }

  getInputValue = (value) => {
    this.setState({username: value}, ()=>{
      console.log(this.state)
    })
  };

  loginClicked = () => {
    let loginDetail = this.state.username;
    if(loginDetail == ""){
      alert("Too excited? You forgot to enter username!")
    }else{
      this.props.navigation.navigate(navigationStrings.LOGINPASSWORD, {name: loginDetail})
    }
  };

  render() {
    let {navigation} = this.props;

    return (
      <View style = {{flex: 1}}>
        <View style = {styles.topBar}>
          <View>
            <Text style = {styles.header}>AJIO</Text>
          </View>
          <View style = {{paddingLeft: 15}}>
          <Text style = {styles.headerText}>Good morning,</Text>
          <Text style = {[styles.headerText, {marginBottom: 70}]}>Login to start shopping</Text>
          </View>

        </View>
        <View style = {{height: 580}}>
        <TextInput onChangeText = {(value)=> this.getInputValue(value) } style = {styles.input} 
        placeholder = "Username"
        />
        <View style = {styles.forgotButton}>
          <Text style = {styles.forgotText}>Forgot Username?</Text>
        </View>
        <View style = {styles.loginButton}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => this.loginClicked()}
          >
            <Text style = {styles.loginText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.signUpButton}>
          <Text style = {{marginBottom: 15}}>Dont have an account yet? Create one</Text>
          <TouchableOpacity style = {styles.signup} onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style = {styles.signupText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topBar:{
    height: 350, backgroundColor: "#fe4a56", justifyContent: "space-between", borderBottomRightRadius: 80
  },
  header:{
    marginTop: 70, color: "white", fontSize: 55, fontWeight: "bold", alignSelf: "center"
  },
  headerText:{
    color: "#eee", fontSize: 30, fontWeight: "bold"
  },
  input:{
    marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 45, color: "#777", fontSize: 22, paddingLeft: 10
  },
  forgotButton:{
    display: "flex", justifyContent: "flex-end", flexDirection: "row", marginTop: 25, marginRight: 25
  },
  forgotText:{
    color: "#fe4a56", fontSize: 18
  },
  loginButton:{
    backgroundColor: "#fe4a56", marginTop: 30, marginHorizontal: 30, paddingVertical: 16, borderRadius: 10
  },
  loginText:{
    color: "white", fontSize: 20, fontWeight: "bold"
  },
  signUpButton:{
    alignItems: "center", marginTop:120
  },
  signup:{
    marginHorizontal: 100, backgroundColor: 'black', borderRadius: 10
  },
  signupText:{
    fontWeight: "bold", color: "white", paddingHorizontal: 50, paddingVertical: 15
  }
}
)
