import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {ImageBackground} from 'react-native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import images from '../../constant/images';
import openMap from 'react-native-open-maps';
import navigationStrings from '../../constant/navigationStrings';
import {TextInput} from 'react-native';
export default class PlaceOrders extends Component {
  state = {
    cumtomerOption: [
      {name: 'Previous orders'},
      {name: 'AJIO Wallet', new: true},
      {name: 'My Rewards', new: true},
      {name: 'Feedback'},
      {name: 'Address book'},
      {name: 'Customer Care'},
    ],
    payMethod: 'debit',
  };
  openMap() {
    openMap({latitude: 30.73629, longitude: 76.7884});
  }

  openPhone = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${7984651345}';
    } else {
      phoneNumber = 'telprompt:${7984651345}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    let {orderDetails, navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#f0f4f7'}}>
        <View style={{paddingTop: 25, backgroundColor: '#fff'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 34,
              marginLeft: 25,
              marginBottom: 25,
            }}>
            Check out
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            width: '90%',
            height: 80,
            backgroundColor: '#333',
            marginLeft: '5%',
            borderRadius: 25,
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              backgroundColor: 'blue',
              marginTop: 10,
              marginLeft: 20,
              borderRadius: 40,
            }}
            source={{
              uri:
                'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white',
                marginTop: 5,
                marginLeft: 20,
              }}>
              Arush Sharma
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                backgroundColor: '#1db078',
                marginTop: 5,
                marginLeft: 20,
                width: '20%',
                borderRadius: 4,
                paddingLeft: 7,
              }}>
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 40,
            }}
            onPress={this.openPhone}>
            <Image
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'white',
                marginTop: 10,
                marginLeft: 10,
                borderRadius: 30,
              }}
              source={images.PHONE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 40,
            }}
            onPress={() => {
              Linking.openURL('mailto:example@ajio.com');
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                backgroundColor: 'white',
                marginTop: 12,
                marginLeft: 12,
              }}
              source={images.MAIL}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'white',
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 40,
            }}
            onPress={this.openMap}>
            <Image
              style={{
                width: 55,
                height: 65,
                backgroundColor: 'white',
                marginTop: 8,
                marginLeft: 12,
                borderRadius: 25,
              }}
              source={images.MAPS}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <View style={{marginHorizontal: 20}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Payment Method
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 25,
                }}>
                <TouchableOpacity
                  style={
                    this.state.payMethod == 'debit'
                      ? {
                          flex: 0.4,
                          paddingHorizontal: 0,
                          borderWidth: 2,
                          paddingVertical: 10,
                          borderRadius: 20,
                        }
                      : {
                          flex: 0.4,
                          paddingHorizontal: 0,
                          borderWidth: 2,
                          paddingVertical: 10,
                          borderRadius: 20,
                          borderColor: '#aaa',
                        }
                  }
                  onPress={() => {
                    this.setState({payMethod: 'debit'});
                  }}>
                  <Text
                    style={[
                      {textAlign: 'center'},
                      this.state.payMethod == 'debit'
                        ? {color: '#000'}
                        : {color: '#aaa'},
                    ]}>
                    Debit Card
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.payMethod == 'paypal'
                      ? {
                          flex: 0.4,
                          paddingHorizontal: 0,
                          borderWidth: 2,
                          paddingVertical: 10,
                          borderRadius: 20,
                        }
                      : {
                          flex: 0.4,
                          paddingHorizontal: 0,
                          borderWidth: 2,
                          paddingVertical: 10,
                          borderRadius: 20,
                          borderColor: '#aaa',
                        }
                  }
                  onPress={() => {
                    this.setState({payMethod: 'paypal'});
                  }}>
                  <Text
                    style={[
                      {textAlign: 'center'},
                      this.state.payMethod == 'paypal'
                        ? {color: '#000'}
                        : {color: '#aaa'},
                    ]}>
                    Paypal
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              paddingTop: 10,
              paddingBottom: 30,
            }}>
            {this.state.payMethod == 'debit' ? (
              <View style={{}}>
                <TextInput
                  placeholder="Card Number"
                  style={{
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderBottomWidth: 1,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 15,
                    paddingHorizontal: 0,
                  }}>
                  <TextInput
                    style={{flex: 0.3, borderBottomWidth: 1}}
                    placeholder="MM/YYYY"
                  />
                  <TextInput
                    style={{flex: 0.5, borderBottomWidth: 1}}
                    placeholder="Card Holder"
                  />
                </View>
              </View>
            ) : (
              <View style={{}}>
                <TextInput
                  placeholder="Phone Number"
                  style={{
                    marginHorizontal: 20,
                    borderBottomWidth: 1,
                    borderBottomWidth: 1,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 15,
                    paddingHorizontal: 0,
                  }}>
                  <TextInput
                    style={{borderBottomWidth: 1, width: '90%'}}
                    placeholder="Name"
                  />
                </View>
              </View>
            )}
            <TouchableOpacity
              onPress={this.onShare}
              style={{
                width: '50%',
                height: 40,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 35,
              }}
              onPress={() => {
                navigation.navigate(navigationStrings.HOMESCREEN);
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.onShare}
          style={{
            width: '80%',
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 25,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Review Order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listElementContainer: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listTextOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTextNew: {
    fontSize: 10,
    color: 'white',
    backgroundColor: '#f57a79',
    justifyContent: 'center',
    marginLeft: 12,
    borderRadius: 2,
    paddingHorizontal: 5,
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
});
