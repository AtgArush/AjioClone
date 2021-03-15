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
      <View style={styles.container}>
        <View
          style={styles.topBar}>
          <View>
            <Image
              style={styles.topIcon}
              source={images.HAMBURGERICON}
            />
          </View>
          <View>
            <Text
              style={styles.centerText}>
              Stores
            </Text>
          </View>
          <View>
            <Image
              style={[styles.topIcon,{
                marginHorizontal: 5,
                marginVertical: 0,
              }]}
              source={images.BELLICON}
            />
          </View>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search by Product, Brand & more.."
            style={styles.searchInput}></TextInput>
          <Image
            style={styles.searchImage}
            source={images.SEARCH}
          />
        </View>

        <View
          style={styles.topBanner}>
          <Text
            style={styles.topBannerText}>
            THE ULTIMATE FASHION DESTINATION
          </Text>
          <Text>The hottest brands and styles - all a click away!</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={[styles.bannerBottom, {backgroundColor: "#019dda"}]}></View>
          <View
            style={styles.bannerBottom}></View>
        </View>

        <ScrollView>
          <ImageBackground
            source={images.STORE}
            style={styles.textBanner}>
            <View
              style={styles.textBannerBox}>
              <Text
                style={styles.textOne}>
                INTRODUCING
              </Text>
              <Text
                style={styles.textTwo}>
                AJIO LUXE
              </Text>
              <Text style={styles.textThree}>
                /
              </Text>
              <Text style={styles.textThree}>
                YOUR ONE-STOP
              </Text>
              <Text style={styles.textThree}>
                LUXURY DESTINATION
              </Text>
            </View>
          </ImageBackground>

          <View
            style={styles.splitSection}>
            <View style={{flex: 0.48}}>
              <View style={{flex: 0.75}}>
                <View style={styles.imageBox}>
                  <Image
                    style={styles.splitSectionImage}
                    source={images.TOPROWLEFT}
                  />
                  <View style={styles.rightSideBox}>
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
                    source={images.TOPROWRIGHT}
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
              source={images.STOREPOSTER}
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
  container:{flex: 1, backgroundColor: '#f0f4f7'},
  topBar:{
    height: 60,
    // flex: 0.10,
    paddingHorizontal: 20,
    // paddingVertical: 10,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIcon:{resizeMode: 'contain', height: 30, width: 30},
  centerText:{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'},
  searchBox:{display: 'flex', flexDirection: 'row'},
  searchInput:{
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 15,
    flex: 1,
    marginBottom: 15,
    paddingLeft: 50,
  },
  searchImage:{
    height: 40,
    width: 40,
    position: 'absolute',
    top: 2,
    left: 38,
  },
  topBanner: {
    backgroundColor: '#ffe401',
    paddingVertical: 20,
    alignItems: 'center',
  },
  topBannerText:{
    fontWeight: 'bold', fontSize: 21, fontFamily: 'Cochin'
  },
  bannerBottom:{flex: 0.5, backgroundColor: '#ff106d', height: 10},
  textBanner:{              resizeMode: 'cover',
  justifyContent: 'center'},
  textBannerBox:{
    justifyContent: 'center',
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textOne:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textTwo:{
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textThree:{
    color: 'white', fontSize: 20, textAlign: 'center'
  },
  splitSection:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 360,
  },
  imageBox:{display: 'flex', flexDirection: 'row'},
  splitSectionImage:{width: '97%', resizeMode: 'contain', height: 310},
  rightSideBox:{width: '3%', height: 310, display: 'flex'}
});
