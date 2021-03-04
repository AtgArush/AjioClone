import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import images from '../../constant/images';

export default class Stores extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f4f7'}}>
        <View
          style={{
            height: 60,
            // flex: 0.10,
            paddingHorizontal: 20,
            // paddingVertical: 10,
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Image
              style={{resizeMode: 'contain', height: 30, width: 30}}
              source={images.HAMBURGERICON}
            />
          </View>
          <View>
            <Text
              style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
              Stores
            </Text>
          </View>
          <View>
            <Image
              style={{
                resizeMode: 'contain',
                height: 30,
                width: 30,
                marginHorizontal: 5,
                marginVertical: 0,
              }}
              source={images.BELLICON}
            />
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TextInput
            placeholder="Search by Product, Brand & more.."
            style={{
              height: 40,
              backgroundColor: 'white',
              marginHorizontal: 30,
              borderRadius: 15,
              flex: 1,
              marginBottom: 15,
              paddingLeft: 50,
            }}></TextInput>
          <Image
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              top: 2,
              left: 38,
            }}
            source={images.SEARCH}
          />
        </View>

        <View
          style={{
            backgroundColor: '#ffe401',
            paddingVertical: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: 21, fontFamily: 'Cochin'}}>
            THE ULTIMATE FASHION DESTINATION
          </Text>
          <Text>The hottest brands and styles - all a click away!</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{flex: 0.5, backgroundColor: '#ff106d', height: 10}}></View>
          <View
            style={{flex: 0.5, backgroundColor: '#019dda', height: 10}}></View>
        </View>

        <ScrollView>
          <ImageBackground
            source={images.STORE}
            style={{
              resizeMode: 'cover',
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                paddingVertical: 50,
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}>
                INTRODUCING
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 45,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                AJIO LUXE
              </Text>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                /
              </Text>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                YOUR ONE-STOP
              </Text>
              <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                LUXURY DESTINATION
              </Text>
            </View>
          </ImageBackground>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 360,
            }}>
            <View style={{flex: 0.48}}>
              <View style={{flex: 0.75}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image
                    style={{width: '97%', resizeMode: 'contain', height: 310}}
                    source={require('./toprowLeft.jpg')}
                  />
                  <View style={{width: '3%', height: 310, display: 'flex'}}>
                    <View
                      style={{flex: 0.5, backgroundColor: '#ffe401'}}></View>
                    <View
                      style={{flex: 0.5, backgroundColor: '#ff106d'}}></View>
                  </View>
                </View>
                <View></View>
              </View>
              <View style={{flex: 0.25, alignItems: 'center', marginTop: 200}}>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#49515c'}}>
                  THE HOUSE OF
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#49515c'}}>
                  MUST-OWN FASHION TRENDS
                </Text>
              </View>
            </View>

            <View style={{flex: 0.48}}>
              <View style={{flex: 0.75}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{width: '3%', height: 310, display: 'flex'}}>
                    <View
                      style={{flex: 0.5, backgroundColor: '#ffe401'}}></View>
                    <View
                      style={{flex: 0.5, backgroundColor: '#ff106d'}}></View>
                  </View>
                  <Image
                    style={{width: '97%', resizeMode: 'contain', height: 310}}
                    source={require('./toprowRight.jpg')}
                  />
                </View>
                <View></View>
              </View>
              <View style={{flex: 0.25, alignItems: 'center', marginTop: 200}}>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#49515c'}}>
                  LARGEST EXCLUSIVE
                </Text>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: '#49515c'}}>
                  COLLECTION AT BEST PRICE
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Image
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: 250,
                marginVertical: 15,
              }}
              source={require('./poster.jpg')}
            />
          </View>

          <View
            style={{
              paddingVertical: 20,
              borderWidth: 10,
              borderColor: '#ff106d',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: '#797a7c'}}>
              BRANDS FRESH ON THE SCENE
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
