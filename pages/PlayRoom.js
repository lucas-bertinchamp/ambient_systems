import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {Header} from '../components/Header';

export default function PlayRoom() {
  return (
    <ImageBackground
      source={require('../assets/background/background.jpg')}
      style={styles.background}>
      <View style={styles.main_box}>
        <Header />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main_box: {
    height: '100%',
    width: '100%',
  },
});
