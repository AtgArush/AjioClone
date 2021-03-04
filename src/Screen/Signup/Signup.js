import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, TextInput} from 'react-native';
import InputField from '../../Component/InputField';
import images from '../../constant/images';
import navigationStrings from '../../constant/navigationStrings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetail: {
        name: '',
        phone: '',
        email: '',
        password: '',
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
    console.log("login")
    let loginDetail = {...this.state.loginDetail};
    for (let a in loginDetail) {
      console.log(a);
      if (loginDetail[a] == '') {
        console.log(loginDetail[a]);
        alert(`Enter ${a}`);
        break;
      }
    }
  };

  render() {
    let {navigation} = this.props;
    const windowHeight = Dimensions.get('window').height;

    return (
      <KeyboardAwareScrollView enableOnAndroid={true}>
              <View style = {{flex: 1, backgroundColor:"#eee"}}>
        <View style = {{height: 350, backgroundColor: "#fe4a56", borderBottomRightRadius: 80}}>
          <View style = {{paddingLeft: 15, marginTop: 25}}>
          <Text style = {{color: "#eee", fontSize: 30, fontWeight: "bold"}}>Alright,</Text>
          <Text style = {{color: "#eee", fontSize: 30, fontWeight: "bold", marginBottom: 70}}>Lets get started</Text>
          </View>

        </View>
        <View style = {{ marginTop: -180, width: "80%", backgroundColor: "white", marginLeft: "10%", borderRadius: 15,
      shadowColor: "#000",
      
      shadowOpacity: 0.9,
      shadowRadius: 30,
      
      elevation: 22,
      }}>
        
        <TextInput style = {{marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 25, color: "#777", fontSize: 22, paddingLeft: 10}} 
        placeholder = "Name" onChangeText = {(value) => this.getInputValue(value, "name")}
        />
        <TextInput style = {{marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 25, color: "#777", fontSize: 22, paddingLeft: 10}} 
        placeholder = "Password" onChangeText = {(value) => this.getInputValue(value, "password")}
        />
        <TextInput style = {{marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 25, color: "#777", fontSize: 22, paddingLeft: 10}} 
        placeholder = "Confirm Password" onChangeText = {(value) => this.getInputValue(value, "retypePass")}
        />
        <TextInput style = {{marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 25, color: "#777", fontSize: 22, paddingLeft: 10}} 
        placeholder = "Email" onChangeText = {(value) => this.getInputValue(value, "email")}
        />
        <TextInput style = {{marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 25, color: "#777", fontSize: 22, paddingLeft: 10}} 
        placeholder = "Phone number" onChangeText = {(value) => this.getInputValue(value, "phone")}
        />

<View style = {{backgroundColor: "#fe4a56", marginVertical: 30, marginHorizontal: 30, paddingVertical: 16, borderRadius: 10, width: "84%"}}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => this.loginClicked()}
          >
            <Text style = {{color: "white", fontSize: 20, fontWeight: "bold"}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style = {{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "10%", marginTop: 25}}>
                <View style = {{flex: 0.44, height: 2, backgroundColor: "#555"}}></View>
                <Text style = {{marginHorizontal: 25}}>OR</Text>
                <View style = {{flex: 0.44, height: 2, backgroundColor: "#555"}}></View>
            </View>
            <View style = {{backgroundColor: "#fe4a56", marginTop: 30, marginHorizontal: 30, paddingVertical: 16, borderRadius: 10, width: "84%"}}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => navigation.navigate(navigationStrings.LOGINUSERNAME)}
          >
            <Text style = {{color: "white", fontSize: 20, fontWeight: "bold"}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

