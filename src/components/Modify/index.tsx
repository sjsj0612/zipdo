import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

interface Props {
  hasText: boolean;
  onPress: any;
}

const Modify = ({hasText, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="pencil-box-outline" size={30} />
      {hasText && <Text style={styles.text}>수정하기</Text>}
    </TouchableOpacity>
  );
};

Modify.defaultProps = {
  hasText: true,
  onPress: console.log,
};
export default Modify;
