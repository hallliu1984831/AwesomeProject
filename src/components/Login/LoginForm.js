import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Linking,
  TouchableOpacity,
  Text
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Mobile Phone No. / Email'/>
        <TextInput style={styles.input} placeholder='Password' secureTextEntry/>
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText} onPress={() => navigate('Brand')}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.linking} onPress={() => navigate('Register')}>
            Register
          </Text>
          <Text style={styles.linking} onPress={() => navigate('ForgetPassword')}>
            Forget Password?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      padding: 20
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      paddingHorizontal: 10
    },
    buttonContainer: {
      backgroundColor: '#E91E63',
      paddingVertical: 15
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF'
    },
    linkContainer: {
      marginTop: 15,
      flexDirection: 'row',
      display: 'flex'
    },
    linking: {
      flex: 1,
      color:'blue',
      opacity: 0.7,
      paddingHorizontal: 30,
      textDecorationLine: 'underline'
    }
  }
)
