import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darker,
    padding: metrics.basePadding,
  },

  link: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: metrics.basePadding,
  },

});

export default styles;
