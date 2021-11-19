import {StyleSheet} from 'react-native';
import {fontSize, fontWeight, margin, padding, palette} from '~/style/base';

const styles = StyleSheet.create({
  box: {
    ...padding(30, 30, 30, 30),
    flexDirection: 'column',
    alignItems: 'center',
  },
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: palette.pointYellow,
    ...margin(null, null, null, 20),
  },
  nickname: {
    ...margin(10, 10, 5, 5),
    ...fontSize.l,
    ...fontWeight.bold,
  },
  regularText: {
    ...margin(2, 2, null, null),
    ...fontSize.sm,
    ...fontWeight.semiBold,
    color: palette.black,
  },
  pointText: {
    ...margin(2, 2, null, null),
    ...fontSize.l,
    ...fontWeight.semiBold,
    color: palette.pointGreen,
  },
  subText: {
    ...margin(null, null, 4, null),
    ...fontSize.xs,
    ...fontWeight.extraLight,
    color: palette.black,
  },
  status: {
    ...margin(null, null, 20, null),
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  stretch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default StyleSheet.create({
  ...fontSize,
  ...fontWeight,
  ...margin,
  ...padding,
  ...styles,
});
