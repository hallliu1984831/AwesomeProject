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
import Category from './Category';
import Personal from './Personal';

const HOME = 'home';
const HOME_IMAGE = require('../../images/tabs/home.png');
const CATEGORY = 'category';
const CATEGORY_IMAGE = require('../../images/tabs/category.png');
const SEARCH = 'search';
const SEARCH_IMAGE = require('../../images/tabs/search.png');
const PERSONAL = 'personal';
const PERSONAL_IMAGE = require('../../images/tabs/personal.png');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME, showPage: false};
    // refresh the state after timeout by change welcome page to main page
    setTimeout(() => {
      this.setState({ showPage: true });
    }, 4000);
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
          {this._renderTabItem(HOME_IMAGE, HOME_IMAGE, HOME, <MainScreen />)}
          {this._renderTabItem(CATEGORY_IMAGE, CATEGORY_IMAGE, CATEGORY, <Category />)}
          {this._renderTabItem(SEARCH_IMAGE, SEARCH_IMAGE, SEARCH, this._createChildView(SEARCH))}
          {this._renderTabItem(PERSONAL_IMAGE, PERSONAL_IMAGE, PERSONAL, <Personal navigation={this.props.navigation} />)}
          </TabNavigator>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/logo.jpg')} />
            <Text style={styles.title}>Little Flower</Text>
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
      backgroundColor: '#FFF',
      justifyContent: 'center'
    },
    logo: {
      width:100,
      height:100,
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
      height: 50,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabIcon: {
      width: 30,
      height: 30,
      resizeMode: 'stretch',
      marginTop: 10
    }
  }
)
