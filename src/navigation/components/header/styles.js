import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darker,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.dakr,
    elevation: 10,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  iconContainer: {
    flexDirection: 'row',
  },

});

export default styles;
