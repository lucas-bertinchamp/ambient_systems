import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ButtonGoBack} from './ButtonGoBack';

export function Header() {
  return (
    <View style={styles.main_box}>
      <View style={styles.button_box}>
        <ButtonGoBack />
      </View>
      <View style={styles.title_box}>
        <Text style={styles.title}>Photo Roulette</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_box: {
    height: '8%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
  },
  button_box: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_box: {
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Bungee-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginRight: '20%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
});
