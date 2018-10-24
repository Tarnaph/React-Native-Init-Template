import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    elevation: 10,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.darker,
  },

  iconContainer: {
    flexDirection: 'row',
  },

  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },

});

export default styles;
