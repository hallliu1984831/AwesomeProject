import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Header from './Header';
import Brand from './Brand';
import MainScreen from './MainScreen';
import LoginForm from '../Login/LoginForm';

const HOME = 'home';
const HOME_NORMAL = require('../../images/tabs/home_normal.png');
const HOME_FOCUS = require('../../images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../../images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../../images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../../images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../../images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../../images/tabs/cart_normal.png');
const CART_FOCUS = require('../../images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../../images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../../images/tabs/personal_focus.png');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME, showPage: false};

    // Toggle the state every second
    setTimeout(() => {
      this.setState({ showPage: true });
    }, 5000);
  }
  _renderTabItem(img, selectedImg, tag, childView) {
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === tag}
              renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
              renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
              onPress={() => this.setState({ selectedTab: tag })}>
              {childView}
          </TabNavigator.Item>
      );
  }

  _createChildView(tag) {
      return (
          <View>
              {(() => {
                if (tag === CATEGORY) {
                  return <Brand />
                } else if (tag === PERSONAL) {
                  return
                } else {
                  return <Text>No records found.</Text>
                }
              })()}
          </View>
      )
  }

  render() {
    if (this.state.showPage) {
      return (
        <View style={styles.mainContainer}>
          <Header />
          <TabNavigator tabBarStyle={styles.tab}>
          {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <MainScreen />)}
          {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))}
          {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))}
          {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))}
          {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <LoginForm navigation={this.props.navigation} />)}
          </TabNavigator>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/logo.jpg')} />
            <Text style={styles.title}>Little Flower Kid</Text>
            </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow:1,
      backgroundColor: '#F8BBD0',
      justifyContent: 'center'
    },
    logo: {
      width:200,
      height:200,
      borderRadius:50
    },
    title: {
      marginTop: 10,
      fontWeight: 'bold',
      width: 180,
      color: '#E91E63',
      fontSize: 20,
      textAlign: 'center',
      opacity:0.9
    },
    tab: {
      height: 60,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabIcon: {
      width: 30,
      height: 35,
      resizeMode: 'stretch',
      marginTop: 10
    }
  }
)
