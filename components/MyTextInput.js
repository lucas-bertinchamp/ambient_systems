import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

export function MyTextInput() {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.main_box}>
      <TextInput
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main_box: {
    backgroundColor: 'rgba(140, 78, 209, 0.99)',
    borderRadius: 10,
    width: '80%',
    shadowColor: 'rgba(0, 0, 0, 0.75)',
  },
  input: {
    margin: 8,
    fontFamily: 'Bungee-Regular',
    borderRadius: 5,
    textAlign: 'center',
  },
});
