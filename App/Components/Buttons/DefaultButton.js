import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './DefaultButtonStyles';

export default class Button extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any,
    title: PropTypes.string.isRequired,
    transparent: PropTypes.bool,
  }

  getTextStyle(){
    return this.props.transparent ? [styles.label, styles.transparentLabel] : styles.label
  }

  getButtonStyle(){
    return this.props.transparent ? [styles.button, styles.transparentButton, this.props.style] : [styles.button, this.props.style]
  }

  renderOverlay() {
    return (this.props.active===false ?
      <View style={[this.getButtonStyle(), styles.inactiveOverlay]} pointerEvents={'none'}/>
      :
      null)
  }

  render(){
    return (
      <TouchableOpacity active={this.props.active} onPress={this.props.active===false ? ()=>{} : this.props.onPress} style={this.getButtonStyle()} activeOpacity={this.props.active===false ? 1 : 0.2}>
          <Text style={this.getTextStyle()}>{this.props.title.toUpperCase()}</Text>
          { this.renderOverlay() }
      </TouchableOpacity>
    )
  }
}
