import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  PropTypes
} from 'react-native';

export default class MenuButton extends Component {
  static propTyes = {
    renderIcon: React.PropTypes.number.isRequired,
    showText: React.PropTypes.string,  // show title
    tag: React.PropTypes.string,  // Tag
    onClick: React.PropTypes.func  // call back function
  };
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  };
  _onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.showText, this.props.tag);
    }
  };
  render() {
    return (
        <TouchableWithoutFeedback onPress={this._onClick}>
            <View style={{alignItems:'center',flex:1}}>
                <Image style={styles.iconImg} source={this.props.renderIcon}/>
                <Text>{this.props.showText}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 50,
        height: 50,
        marginBottom: 2
    }
})
