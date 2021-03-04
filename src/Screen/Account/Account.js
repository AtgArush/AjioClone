import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../constant/images';
import navigationStrings from '../../constant/navigationStrings';
export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      cumtomerOption: [
        {name: 'Orders'},
        {name: 'AJIO Wallet', new: true},
        {name: 'My Rewards', new: true},
        {name: 'Invite Friends', new: true},
        {name: 'Address book'},
        {name: 'Customer Care'},
        {name: 'Payments'},
      ],
      companySection: [
        'Return Creation Demo',
        'How To Return',
        'How Do I Redeem My Coupon',
        'Terms & Conditions',
        'Returns & Refund Policy',
        'We Repect Your Privacy',
        'Fees & Payments',
        'Who We Are',
        'Join Our Team',
      ],
    };
  }

  render() {
    let {cumtomerOption, companySection} = this.state;
    let {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginTop: 25}}>
          <Text
            style={styles.heading}>
            My Account
          </Text>
        </View>

        <ScrollView>
          <View
            style={styles.accountDetailContainer}>
            <View style={{flex: 0.25}}>
              <View
                style={styles.accountDetailContainerLeftImage}>
                <Text
                  style={styles.accountIconText}>
                  AS
                </Text>
              </View>
            </View>
            <View style={styles.accountRight}>
              <Text style={styles.accountTextMain}>DummyNameA</Text>
              <Text style={[styles.accountText]}>dummyMail@xyz.com</Text>
              <Text style={[styles.accountText]}>01478502369</Text>
            </View>
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <Text style={{color: '#1e6b8f'}}>Edit</Text>
            </View>
          </View>

          {cumtomerOption.map((item, key) => {
            return (
              <View
                style={styles.listElementContainer}
                key={key}>
                <View
                  style={styles.listTextOne}>
                  <Text>{item.name}</Text>
                  {item.new && (
                    <Text
                      style={styles.listTextNew}>
                      NEW
                    </Text>
                  )}
                </View>
                <Image source={images.ARROWRIGHT} style={{marginRight: -15}} />
              </View>
            );
          })}
          <View style={{height: 15, backgroundColor: '#f0f4f7'}}></View>
          {companySection.map((item, key) => {
            return (
              <View
                style={styles.listElementContainer}
                key={key}>
                <View
                  style={StyleSheet.listTextOne}>
                  <Text>{item}</Text>
                </View>
                <Image source={images.ARROWRIGHT} style={{marginRight: -15}} />
              </View>
            );
          })}
          <View style={{height: 15, backgroundColor: '#f0f4f7'}}></View>
          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.LANDINGPAGE)}
              style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
            <Text
              style={styles.version}>
              Version 6.13.2 Build 1387
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1, backgroundColor: 'white'
  },
  heading:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    marginBottom: 25,
  },
  accountDetailContainer:{
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0f4f7',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  accountDetailContainerLeftImage:{
    backgroundColor: '#000',
    borderRadius: 100,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    width: 90,
  },
  accountIconText:{
    color: 'white', fontSize: 45, fontWeight: 'bold'
  },
  accountRight: {
    flex: 0.6, marginLeft: 5, justifyContent: 'center'
  },
  accountTextMain:{
    fontSize: 16, fontWeight: 'bold'
  },
accountText:{
  fontSize: 16,
},
listElementContainer:{
  height: 60,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  alignItems: 'center',
  backgroundColor: 'white',
},
listTextOne:{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
listTextNew:{
  fontSize: 10,
  color: 'white',
  backgroundColor: '#f57a79',
  justifyContent: 'center',
  marginLeft: 12,
  borderRadius: 2,
  paddingHorizontal: 5,
},
logoutButtonContainer:{
  display: 'flex', justifyContent: 'center'
},
logoutButton:{
  width: '80%',
  paddingVertical: 10,
  alignItems: 'center',
  marginLeft: '10%',
  borderWidth: 0.5,
  borderColor: '#777',
  marginTop: 15,
  borderRadius: 8,
},
logoutButtonText:{
  fontWeight: 'bold', fontSize: 18
},
version:{
  color: '#999', alignSelf: 'center', marginVertical: 15
}
})