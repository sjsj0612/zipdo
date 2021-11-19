import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
  align: {
    ...padding(10, 10, 10, 10),
    maxHeight: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  punchLine: {
    ...padding(10, 10, null, null),
    ...fontSize.sm,
  },
});

export default StyleSheet.create({
  ...fontSize,
  ...fontWeight,
  ...margin,
  ...padding,
  ...styles,
});
