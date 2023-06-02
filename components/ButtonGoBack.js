import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ButtonGoBack() {
  navigation = useNavigation();
  return (
    <Icon.Button
      name="chevron-left"
      size={20}
      backgroundColor="rgba(0, 0, 0, 0)"
      alignItems="center"
      onPress={() => navigation.goBack()}
    />
  );
}
