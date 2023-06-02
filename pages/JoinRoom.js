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
            <Text style={styles.text}>Pseudo</Text>
            <MyTextInput />
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>Nom de salle</Text>
            <MyTextInput />
          </View>
          <View style={styles.playButtonBox}>
            <PlayButton />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main_box: {
    height: '100%',
  },
  dataBox: {
    height: '100%',
  },
  input: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
  },
  playButtonBox: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Bungee-Regular',
    fontSize: 45,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,
  },
});
