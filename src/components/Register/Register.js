import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Please register here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    registerContainer: {
      backgroundColor: '#FFF',
      flex: 1
    },
    registerText: {
      color: '#FFF'
    }
  }
)
