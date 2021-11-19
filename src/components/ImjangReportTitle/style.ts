import {StyleSheet} from 'react-native';
import {palette, fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
  layout: {
    ...padding(10, 10, 10, 10),
  },
  align: {
    ...margin(null, null, 5, 5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reportTitle: {
    color: palette.black,
    ...fontWeight.bold,
    ...fontSize.xxl,
  },
  reportDetail: {
    color: palette.gray,
    ...fontWeight.light,
    ...fontSize.s,
  },
});

export default StyleSheet.create({
  ...fontSize,
  ...fontWeight,
  ...margin,
  ...padding,
  ...styles,
});
