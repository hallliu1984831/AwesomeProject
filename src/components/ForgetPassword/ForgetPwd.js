import React, {Component} from 'react';
import{
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class ForgetPassword extends Component {
  render() {
    return (
      <View style={styles.resetContainer}>
        <Text>Please change password here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    resetContainer: {
      backgroundColor: '#FFF',
      flex: 1
    }
})
