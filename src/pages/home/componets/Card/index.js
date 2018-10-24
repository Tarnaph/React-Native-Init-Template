/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { removeFavorite } from 'redux/ducks/favorites';
// import { addIssues } from 'redux/ducks/issues';

import styles from './styles';

export class Repository extends Component {
  static navigationOptions = {
    header: null,
  };
  static propTypes = {
    style: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    return (
      <View style={[styles.box, this.props.style]}>
        <View style={styles.headerContainer}>
        </View>
      </View>
    );
  }
}

const mapDispathToProps = dispatch =>
  bindActionCreators({ removeFavorite, addIssues }, dispatch);

export default connect(null, mapDispathToProps)(Repository);
