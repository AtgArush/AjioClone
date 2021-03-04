import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import images from '../../constant/images';
import ItemList from '../../Component/ItemList';
import navigationStrings from '../../constant/navigationStrings';
// import {useNavigation} from "@react-navigation/native"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      addedItem: 0,
      addedItemArray: [],
      cartList: [
        {
          id: 1,
          name: 'SUPERDRY',
          descriptionShort: 'Lineman Pool Sliders with Embossed Branding',
          priceDiscounted: 1739,
          priceOriginal: 2999,
          discount: 42,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h77/h97/15706429030430/superdry_blue_lineman_pool_sliders_with_embossed_branding.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/hc1/h05/15699395772446/-473Wx593H-410256368-0tf-MODEL2.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h9c/h3a/15699392364574/-473Wx593H-410256368-0tf-MODEL3.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h60/h27/15699399639070/-473Wx593H-410256368-0tf-MODEL.jpg',
          ],
        },
        {
          id: 2,
          name: 'ASICS',
          descriptionShort: 'Gel Contend 4B+ Running Shoes',
          priceDiscounted: 2729,
          priceOriginal: 3499,
          discount: 22,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/20200905/95Ad/5f528b287cdb8c7662941ad8/asics_black_gel_contend_4b+_running_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/20200905/AE4a/5f5290c1aeb269ef8eb9afe9/-473Wx593H-460681469-black-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20200905/oMJI/5f528fdcf997dd6918b5e527/-473Wx593H-460681469-black-MODEL3.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20200905/abOl/5f528df8aeb269ef8eb9a590/-473Wx593H-460681469-black-MODEL2.jpg',
          ],
        },
        {
          id: 3,
          name: 'NIKE',
          descriptionShort: 'Court Vision Low-Top Lace-Up Shoes',
          priceDiscounted: 3846,
          priceOriginal: 4995,
          discount: 23,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h48/h86/15329791475742/nike_white_court_vision_low-top_lace-up_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h4e/hd6/15329788723230/-473Wx593H-460550658-white-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h60/h2f/15329786069022/-473Wx593H-460550658-white-MODEL3.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h48/h86/15329791475742/-473Wx593H-460550658-white-MODEL.jpg',
          ],
        },
        {
          id: 4,
          name: 'PUMA',
          descriptionShort: 'Dryflex IDP Low-Top Lace-Up Casual Shoes',
          priceDiscounted: 1750,
          priceOriginal: 3499,
          discount: 50,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h83/hb7/16209307861022/puma_navy_blue_dryflex_idp_low-top_lace-up_casual_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h83/hb7/16209307861022/-473Wx593H-460570441-navyblue-MODEL.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h14/h3e/16209298817054/-473Wx593H-460570441-navyblue-MODEL2.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h4e/h81/16209303863326/-473Wx593H-460570441-navyblue-MODEL5.jpg',
          ],
        },
        {
          id: 5,
          name: 'DENILL',
          descriptionShort: 'Slip-On Mules with Bow Applique',
          priceDiscounted: 1200,
          priceOriginal: 3599,
          discount: 66,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/20210126/vUiU/600f9d3ef997dd5c40e040a5/denill_grey_slip-on_mules_with_bow_applique_.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/20210126/bVRc/600f9d3ef997dd5c40e04040/-473Wx593H-461912620-grey-MODEL6.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20210126/X6CF/600f9d3ef997dd5c40e0402f/-473Wx593H-461912620-grey-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20210126/MPSb/600f9d3ef997dd5c40e0403e/-473Wx593H-461912620-grey-MODEL3.jpg',
          ],
        },
        {
          id: 6,
          name: 'ADIDAS',
          descriptionShort: 'VS Pace Low-Top Lace-Up Casual Shoes',
          priceDiscounted: 1800,
          priceOriginal: 3999,
          discount: 55,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h33/h7b/16541975576606/adidas_blue_vs_pace_low-top_lace-up_casual_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h19/hb1/16541966336030/-473Wx593H-460562895-blue-MODEL2.jpg',
            'https://assets.ajio.com/medias/sys_master/root/hc2/hb9/16541968826398/-473Wx593H-460562895-blue-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h33/h7b/16541975576606/-473Wx593H-460562895-blue-MODEL.jpg',
          ],
        },
        {
          id: 7,
          name: 'RED TAPE',
          descriptionShort: 'Flip-Flops with Contrast Panels',
          priceDiscounted: 600,
          priceOriginal: 1499,
          discount: 60,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/20200725/tqIW/5f1b2dd1aeb269f5fee603d6/red_tape_black_flip-flops_with_contrast_panels.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/20200725/tY4c/5f1b2a0aaeb269f5fee5f3aa/-473Wx593H-460665602-black-MODEL3.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20200725/nlZr/5f1b2f7b7cdb8c22078534c6/-473Wx593H-460665602-black-MODEL5.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20200725/6UPj/5f1b2e06f997ddfa53225a61/-473Wx593H-460665602-black-MODEL2.jpg',
          ],
        },
        {
          id: 8,
          name: 'Sketchers',
          descriptionShort: 'Go Walk Lace-Up Sports Shoes',
          priceDiscounted: 1739,
          priceOriginal: 2999,
          discount: 42,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/hf0/h7e/11201109032990/skechers_black_go_walk_lace-up_sports_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h62/h73/13604464558110/-473Wx593H-460397613-black-OUTFIT2.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h21/h9a/13604464295966/-473Wx593H-460397613-black-OUTFIT4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h73/h39/13604464820254/-473Wx593H-460397613-black-OUTFIT.jpg',
          ],
        },
        {
          id: 9,
          name: 'Sneak-a-Peek',
          descriptionShort: 'Slingback Chunky Heeled Sandals',
          priceDiscounted: 680,
          priceOriginal: 1699,
          discount: 60,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/20201120/ufhm/5fb7df41f997dd8c83a39699/sneak-a-peek_green_slingback_chunky_heeled_sandals.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/20201120/eYJp/5fb7dc35f997dd8c83a37b89/-473Wx593H-460781896-green-MODEL5.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20201120/8VZu/5fb7dc06aeb269d563168a83/-473Wx593H-460781896-green-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20201120/aurk/5fb7e0b5f997dd8c83a3a2a6/-473Wx593H-460781896-green-MODEL3.jpg',
          ],
        },
        {
          id: 10,
          name: 'UNITED BENETTON',
          descriptionShort: 'Slides with Signature Branding',
          priceDiscounted: 750,
          priceOriginal: 1499,
          discount: 50,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h58/ha6/15649567997982/united_colors_of_benetton_blue_slides_with_signature_branding.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h23/h72/15649582743582/-473Wx593H-460568256-blue-MODEL5.jpg',
            'https://assets.ajio.com/medias/sys_master/root/hdd/h61/15649576124446/-473Wx593H-460568256-blue-MODEL3.jpg',
            'https://assets.ajio.com/medias/sys_master/root/hf8/h26/15649585758238/-473Wx593H-460568256-blue-MODEL4.jpg',
          ],
        },
        {
          name: 'CROCS',
          descriptionShort: 'Crocband Clogs with Branding',
          priceDiscounted: 2636,
          priceOriginal: 3295,
          discount: 20,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/20201006/DpaV/5f7b6c7ef997dd8c83582667/crocs_navy_blue_crocband_clogs_with_branding.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/20201006/iovh/5f7b68f7aeb269d563d1ae4c/-473Wx593H-460532577-navy-MODEL4.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20201006/DpaV/5f7b6c7ef997dd8c83582667/-473Wx593H-460532577-navy-MODEL.jpg',
            'https://assets.ajio.com/medias/sys_master/root/20201006/GhjN/5f7b7353f997dd8c835859a2/-473Wx593H-460532577-navy-MODEL2.jpg',
          ],
        },
        {
          name: 'Lee Cooper',
          descriptionShort: 'Panelled Leather Mid-Top Lace-Up Shoes',
          priceDiscounted: 2177,
          priceOriginal: 3299,
          discount: 34,
          quantity: 1,
          frontImage:
            'https://assets.ajio.com/medias/sys_master/root/h58/h72/14936523309086/lee_cooper_olive_green_panelled_leather_mid-top_lace-up_shoes.jpg',
          imageArray: [
            'https://assets.ajio.com/medias/sys_master/root/h13/hfa/14936509022238/-473Wx593H-460531867-olive-OUTFIT2.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h58/h72/14936523309086/-473Wx593H-460531867-olive-MODEL.jpg',
            'https://assets.ajio.com/medias/sys_master/root/h7c/h31/14936534286366/-473Wx593H-460531867-olive-OUTFIT4.jpg',
          ],
        },
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{width: '100%', marginLeft: '50%'}}
        onPress={() =>
          this.props.navigation.navigate(navigationStrings.PRODUCTPAGE, {
            product: item,
          })
        }>
        <ItemList item={item} />
        <TouchableOpacity
          onPress={() => {
            this.addItem(item);
          }}
          style={{
            width: '30%',
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 14,
            alignItems: 'center',
            marginLeft: 37,
            marginBottom: 15,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Add to cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  addItem = (item) => {
    console.log(item);
    let addedItems = this.state.addedItem;
    let addedItemArray = this.state.addedItemArray;

    alert();
    let itemAdded = false;
    let index = -1;
    // let index = addedItemArray.findIndex((value)=>{value.id == item.id})
    for (let i = 0; i < addedItemArray.length; i++) {
      // console.log(
      //   addedItemArray[i].id,
      //   addedItemArray[i].id == item.id,
      //   item.id,
      // );
      if (addedItemArray[i].id == item.id) {
        // console.log('added duplicate index', i);
        index = i;
      }
    }
    if (index == -1) {
      addedItemArray = [...this.state.addedItemArray, item];
      // console.log(index);
      addedItems = addedItems + 1;
      this.setState(
        {addedItem: addedItems, addedItemArray: addedItemArray},
        () => {
          // console.log(this.state.addedItemArray);
        },
      );
    } else {
      alert('Item Already added');
      index = -1;
    }
  };

  componentDidMount() {
    // this._unsubscribe = this.props.navigation.addListener('focus', () => {
    // do something
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      // console.log(this.props.route.params);
      if (this.props.route.params) {
        // console.log(this.props.route.params.item, 'params');
        let addedElement = this.props.route.params.item;
        this.addItem(addedElement);
        // console.log(this.props.route.params.item);
        this.props.route.params = null;
      }
    });

    // });
  }

  componentWillUnmount() {
    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }

  render() {
    let {cartList, addedItem} = this.state;
    let {navigation} = this.props;
    // console.log(addedItem, '/////////');
    return (
      <View style={{flex: 1, backgroundColor: '#f0f4f7'}}>
        <View style={styles.navbarHolder}>
          {addedItem != 0 && (
            <View style={styles.addedItemIndicator}>
              <Text style={styles.addedItemIndicatorText}>{addedItem}</Text>
            </View>
          )}
          <View>
            <TouchableOpacity
              style={{height: 30, width: 30}}
              onPress={() =>
                navigation.navigate(navigationStrings.SHOPOPTIONS)
              }>
              <Image
                style={styles.hamburgerIcon}
                source={images.HAMBURGERICON}
              />
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image style={styles.navbarRightIcon} source={images.SEARCH} />
            <Image style={styles.navbarRightIcon} source={images.HEART} />
            <TouchableOpacity
              style={styles.navbarRightIcon}
              onPress={() =>
                navigation.navigate(navigationStrings.BAG, {
                  itemList: this.state.addedItemArray,
                })
              }>
              <Image style={styles.navbarRightIcon} source={images.CART} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.navbarTextOne}> Footwear </Text>
          <Text style={styles.navbarTextTwo}>49033 Products</Text>
        </View>
        <FlatList
          data={cartList}
          style={styles.body}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          numColumns={2}
          keyExtractor={(value, i) => String(i)}
          renderItem={this._renderItem}
        />
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbarHolder: {
    height: 20,
    // flex: 0.05,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  addedItemIndicator: {
    position: 'absolute',
    backgroundColor: '#1db078',
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 15,
    right: 28,
    alignItems: 'center',
  },
  addedItemIndicatorText:{
    color: '#f0f4f7', fontWeight: 'bold'
  },
  hamburgerIcon: {
    resizeMode: 'contain', height: 30, width: 30
  },
  navbarRightIcon: {
    resizeMode: 'contain',
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginVertical: 0,
  },
  navbarTextOne:{
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
  },
  navbarTextTwo: {
    marginLeft: 20,
    marginTop: 5,
    color: '#333',
    marginBottom: 10,
  },
  body:{
    backgroundColor: 'white', paddingTop: 15
  }
});
