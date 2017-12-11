import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  welcome: {
    fontSize: fonts.medium,
    textAlign: 'center',
    margin: metrics.smallMargin,
  },
  instructions: {
    textAlign: 'center',
    color: colors.light,
    marginBottom: 5,
  },
});

export default styles;
