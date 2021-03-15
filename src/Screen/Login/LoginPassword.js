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
      this.props.navigation.navigate(navigationStrings.TABROUTES)
    }
  };


  render() {
    let username = this.props.route.params.name
    return (
      <View style={{flex: 1}}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.heading}>AJIO</Text>
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={styles.headerText}>Hi, {username}</Text>
            <Text style={[styles.headerText, {marginBottom: 70}]}>
              Welcome back!!
            </Text>
          </View>
        </View>
        <View style={{height: 580}}>
          <TextInput
            onChangeText={(value) => this.getInputValue(value)}
            style={styles.inputField}
            placeholder="Password"
          />
          <View style={styles.forgotPasswordButton}>
            <Text style={styles.forgotText}>
              Forgot Password?
            </Text>
          </View>
          <View style={styles.login}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.loginClicked()}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={styles.orSection}>
              <View style={styles.horizontalLines}></View>
              <Text style={{marginHorizontal: 25}}>OR</Text>
              <View style={styles.horizontalLines}></View>
            </View>
          </View>
          <View style={styles.login}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.loginText}>Use OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 350,
    backgroundColor: '#fe4a56',
    justifyContent: 'space-between',
    borderBottomRightRadius: 80,
  },
  heading: {
    marginTop: 70,
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerText: {
    color: '#eee',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputField: {
    marginHorizontal: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    marginTop: 45,
    color: '#777',
    fontSize: 22,
    paddingLeft: 10,
  },
  forgotPasswordButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 25,
    marginRight: 25,
  },
  login: {
    backgroundColor: '#fe4a56',
    marginTop: 30,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalLines: {
    flex: 0.44,
    height: 2,
    backgroundColor: '#555',
  },
  orSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotText:{
    color: "#fe4a56", fontSize: 18
  },
});