import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {Header} from '../components/Header';
import {ImageBackground} from 'react-native';
import {MyTextInput} from '../components/MyTextInput';
import {PlayButton} from '../components/PlayButton';

export default function CreateRoom() {
  return (
    <ImageBackground
      source={require('../assets/background/background.jpg')}
      style={styles.background}>
      <View style={styles.main_box}>
        <Header />
        <View style={styles.dataBox}>
          <View style={styles.input}>
            <Text style={styles.pseudo}>Pseudo</Text>
            <MyTextInput />
          </View>
          <PlayButton />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main_box: {
    height: '100%',
  },
  pseudo: {
    fontFamily: 'Bungee-Regular',
    fontSize: 45,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
  dataBox: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
  },
});
