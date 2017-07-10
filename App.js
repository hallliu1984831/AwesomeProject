import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './src/components/Register/Register';
import ForgetPassword from './src/components/ForgetPassword/ForgetPwd';
import Brand from './src/components/Home/Brand';
import Home from './src/components/Home/Home';

import { StackNavigator } from 'react-navigation';

/*class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {showPage: false};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showPage: true };
      });
    }, 5000);
  }

  render() {
    if (this.props.showPage) {
      return <Home navigation={this.props.navigation}/>
    } else {
      return <Text>No records found.</Text>
    }
    return (

          {(() => {
            if (this.state.showText) {
            return <Text>No records found.</Text>
            } else {
              return <Home navigation={this.props.navigation}/>
            }
          })()}

    );
  }
}*/

export default class HomeScreen extends Component {
  render() {
    return (
      <Home navigation={this.props.navigation}/>
    );
  }
}

const LittleFlowerApp = StackNavigator({
  // define navigation options here, such as for home page no need show it
  Home: { screen: HomeScreen, navigationOptions: {header: null} },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerTitleStyle :{
        textAlign: 'center',alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#F8BBD0',
      }
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: 'Forget Password',
      headerTitleStyle :{
        textAlign: 'center',
        alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#F8BBD0',
      }
    }
  },
  Brand: {
    screen: Brand,
    navigationOptions: {
      title: 'Latest Brands',
      headerTitleStyle :{
        textAlign: 'center',
        alignSelf:'center'
      },
      headerStyle:{
        backgroundColor:'#F8BBD0',
      }
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  },
  titlewrapper: {
    flex:1,
    justifyContent: 'center'
  },
  subtitle: {
    color: 'white',
    fontWeight: '300',
    paddingBottom: 20
  }
});

AppRegistry.registerComponent('AwesomeProject', () => LittleFlowerApp);
