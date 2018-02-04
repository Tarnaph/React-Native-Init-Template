/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import { colors } from 'styles';

import styles from './styles';

export default class Menu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.darker}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.link}> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Page1')}>
          <Text style={styles.link}> Link 1</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
