import {Button, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import React from 'react';

export function PlayButton() {
  return (
    <Button
      mode="contained"
      style={styles.button}
      onPress={() => console.log('yooo')}>
      <Text style={styles.text}>JOUER !</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(140, 78, 209, 0.99)',
    borderRadius: 10,
    width: '40%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    margin: 8,
    fontFamily: 'Bungee-Regular',
    fontSize: 25,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
});
