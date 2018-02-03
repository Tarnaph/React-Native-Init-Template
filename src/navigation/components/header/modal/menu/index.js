/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

// import styles from './styles';

export default class Menu extends Component {
  render() {
    return (
      <View>
	      <TouchableOpacity onPress={() => this.props.navigation.navigate('Page3')}>
			   	<Text> Sou o menu</Text>
	      </TouchableOpacity>
		  </View>
    );
  }
}
