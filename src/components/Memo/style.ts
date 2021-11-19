import {StyleSheet} from 'react-native';
import {palette, fontSize, fontWeight, margin, padding} from '~/style/base';

const styles = StyleSheet.create({
  layout: {
    ...padding(10, 10, 0, 0),
  },
  visibleBox: {
    ...padding(10, 10, 10, 10),
    borderWidth: 1,
    borderColor: palette.black,
    minHeight: 100,
  },
  inVisibleBox: {
    ...padding(10, 10, 0, 0),
    minHeight: 70,
  },
  memo: {
    color: palette.black,
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
