/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
			   	<Text style={styles.link}> Home </Text>
	      </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page1')}>
          <Text style={styles.link}> Link 1</Text>
        </TouchableOpacity>
		  </View>
    );
  }
}
