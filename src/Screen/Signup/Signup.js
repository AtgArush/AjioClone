import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import navigationStrings from '../../constant/navigationStrings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from "react-native-snackbar"
import FlashMessage, { showMessage } from 'react-native-flash-message';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetail: {
        name: '',
        password: '',
        retypepass: '',
        phone: '',
        email: '',
      },
      login: false,
      retypePass: '',
    };
  }

  getInputValue = (value, textLabel) => {
    let loginDetail = {...this.state.loginDetail};
    let stateKey = textLabel.toLowerCase().replace(' ', '');
    loginDetail[stateKey] = value;
    console.log(loginDetail);
    this.setState({loginDetail: loginDetail}, ()=>{console.log(this.state)});
  };

  loginClicked = () => {
    // console.log("login")
    let loginDetail = {...this.state.loginDetail};
    for (let a in loginDetail) {
      console.log(a);
      if (loginDetail[a] == '') {
        console.log(loginDetail[a]);
        // alert(`Enter ${a}`);
        if (a == "retypepass") {
          showMessage({
            message: `Enter Confirm password`,
            backgroundColor: "#eb0425"
          })          
        }
        showMessage({
          message: `Enter ${a}`,
          backgroundColor: "#eb0425"
        })
        break;
      }
    }
    this.props.navigation.navigate(navigationStrings.TABROUTES)
  };

  render() {
    let {navigation} = this.props;
    const windowHeight = Dimensions.get('window').height;

    return (
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <View style={styles.topBarTextBox}>
              <Text style={styles.topBarText}>Alright,</Text>
              <Text style={[styles.topBarText, {marginBottom: 70}]}>
                Lets get started
              </Text>
            </View>
          </View>
          <View
            style={styles.signUpBox}>
            <TextInput
              style={styles.textInputBox}
              placeholder="Name"
              onChangeText={(value) => this.getInputValue(value, 'name')}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Password"
              onChangeText={(value) => this.getInputValue(value, 'password')}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Confirm Password"
              onChangeText={(value) => this.getInputValue(value, 'retypePass')}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Email"
              onChangeText={(value) => this.getInputValue(value, 'email')}
            />
            <TextInput
              style={styles.textInputBox}
              placeholder="Phone number"
              onChangeText={(value) => this.getInputValue(value, 'phone')}
            />

            <View
              style={styles.signUpButton}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => this.loginClicked()}>
                <Text
                  style={styles.buttonText}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={styles.orSection}>
              <View style={styles.horizontalLines}></View>
              <Text style={{marginHorizontal: 25}}>OR</Text>
              <View style={styles.horizontalLines}></View>
            </View>
          </View>
          <View
            style={styles.loginButton}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() =>
                navigation.navigate(navigationStrings.LOGINUSERNAME)
              }>
              <Text style={styles.buttonText}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlashMessage position = "center" />
      </KeyboardAwareScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  topBar: {
    height: 350,
    backgroundColor: '#fe4a56',
    borderBottomRightRadius: 80,
  },
  topBarTextBox: {
    paddingLeft: 15,
    marginTop: 25,
  },
  topBarText: {
    color: '#eee',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signUpBox:{
    marginTop: -180,
    width: '80%',
    backgroundColor: 'white',
    marginLeft: '10%',
    borderRadius: 15,
    shadowColor: '#000',

    shadowOpacity: 0.9,
    shadowRadius: 30,

    elevation: 22,
  },
  textInputBox:{
    marginHorizontal: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    marginTop: 25,
    color: '#777',
    fontSize: 22,
    paddingLeft: 10,
  },
  signUpButton:{
    backgroundColor: '#fe4a56',
    marginVertical: 30,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
    width: '84%',
  },
  buttonText:{color: 'white', fontSize: 20, fontWeight: 'bold'}
  ,
  horizontalLines: {
    flex: 0.38,
    height: 2,
    backgroundColor: '#555',
  },
  orSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#fe4a56',
    marginTop: 30,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
    width: '84%',
  },

});
