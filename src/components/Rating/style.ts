import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
  starContainer: {
    ...padding(40, 40, null, null),
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default StyleSheet.create({
  ...fontSize,
  ...fontWeight,
  ...margin,
  ...padding,
  ...styles,
});
