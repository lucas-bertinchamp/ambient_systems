const {Component} = require('react');
import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import ButtonCreate from '../components/ButtonCreate';
import ButtonJoin from '../components/ButtonJoin';
import PlayRoom from './PlayRoom';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function MenuPage() {
  navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/background/background.jpg')}
      style={styles.background}>
      <Button
        onPress={() => navigation.navigate('PlayRoom')}
        style={{backgroundColor: 'red'}}>
        <Text>PlayRoom</Text>
      </Button>
      <View>
        <View style={styles.title_box}>
          <Text style={styles.title}>Photo Roulette</Text>
        </View>
        <View style={styles.buttons_box}>
          <View style={styles.margin}>
            <ButtonCreate />
          </View>
          <View>
            <ButtonJoin />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main_box: {
    backgroundImage: 'url(../assets/background/backgroundGithub.jpg)',
  },
  title_box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  title: {
    fontFamily: 'Bungee-Regular',
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
  margin: {
    margin: 30,
  },
  buttons_box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});
