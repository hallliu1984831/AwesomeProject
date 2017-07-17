import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  RefreshControl,
  Alert,
  ScrollView,
  ListView
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import MenuButton from '../Utility/MenuButton';

const BANNER_IMGS = [
  require('../../images/banner/1.jpg'),
  require('../../images/banner/2.jpg'),
  require('../../images/banner/3.jpg'),
  require('../../images/banner/4.jpg')
]

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    })
    this.state = {
      dataSource: dataSource.cloneWithPages(BANNER_IMGS)
    }

  }
  _renderPage(data, pageID) {
    return (
      <Image
          source={data}
          style={styles.page}/>
        );
  }
  _onMenuClick(title, tag) {
    Alert.alert('Click:' + title + " Tag:" + tag);
  }

  render() {

    return (
      <View>
            <View style={{height:130}}>
              <ViewPager style={{height:130}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
            </View>

            <View style={styles.menuView}>
              <MenuButton renderIcon={require('../../images/home_icons/wdgz.png')}
                          showText={'My Concern'} tag={'wdgz'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/wlcx.png')}
                          showText={'Logistics'} tag={'wlcx'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/cz.png')}
                          showText={'Deposit'} tag={'cz'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/gd.png')}
                          showText={'More'} tag={'gd'}
                          onClick={this._onMenuClick}/>
            </View>
            <View style={styles.menuView}>
              <MenuButton renderIcon={require('../../images/home_icons/gd.png')}
                          showText={'More'} tag={'gd'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/gd.png')}
                          showText={'More'} tag={'gd'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/gd.png')}
                          showText={'More'} tag={'gd'}
                          onClick={this._onMenuClick}/>
              <MenuButton renderIcon={require('../../images/home_icons/gd.png')}
                          showText={'More'} tag={'gd'}
                          onClick={this._onMenuClick}/>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      marginTop:20,
      backgroundColor: '#FFF'
    },

    page: {
      flex: 1,
      height: 130,
      resizeMode: 'stretch'
    },
     menuView: {
       flexDirection: 'row',
       marginTop: 10,
       alignItems: 'flex-start'
     },
     listView: {
       paddingHorizontal: 20
     }
  }
)
