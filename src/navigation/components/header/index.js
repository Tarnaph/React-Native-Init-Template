/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles */
import { colors, fonts } from 'styles';
import styles from './styles';

export default class header extends Component {
  componentWillMount() {
    // console.tron.error(this.props);
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} >
          <Icon name="bars" size={fonts.regular} color={colors.darker} />
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.defaultTitle}</Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }}
          />
        </TouchableOpacity>

      </View>
    );
  }
}
