import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ButtonCreate() {
  navigation = useNavigation();
  return (
    <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("CreateRoom")}>
      <Text style = {styles.text}> Créer une salle</Text>
    </Button>
  );
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Bungee-Regular',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
    }
});

