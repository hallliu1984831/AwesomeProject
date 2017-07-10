import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  Image
} from 'react-native';

export default class Brand extends Component {
  render() {
    return (
      <View style={styles.brandContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/BE.png')} />
          <Text style={styles.imageText}>BEBE Pino</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/WF.png')} />
          <Text style={styles.imageText}>WF</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/BE.png')} />
          <Text style={styles.imageText}>BEBE Pino</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/WF.png')} />
          <Text style={styles.imageText}>WF</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/BE.png')} />
          <Text style={styles.imageText}>BEBE Pino</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/WF.png')} />
          <Text style={styles.imageText}>WF</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/BE.png')} />
          <Text style={styles.imageText}>BEBE Pino</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/WF.png')} />
          <Text style={styles.imageText}>WF</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/BE.png')} />
          <Text style={styles.imageText}>BEBE Pino</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../images/WF.png')} />
          <Text style={styles.imageText}>WF</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  imageContainer: {
    alignSelf:'center',
  },
  image: {
    width:150,
    height:150,
    borderRadius: 50,
    marginTop: 10
  },
  imageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
}
)
