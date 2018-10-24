import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    ...general.contentContainer,
    alignItems: 'center',
    backgroundColor: colors.darker,
  },
});

export default styles;
