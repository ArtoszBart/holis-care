import { Image } from 'expo-image';
import React from 'react';
import { ImageBackground, Platform, StyleSheet, View } from 'react-native';
import Button from '../common/Button';

export default function MainAuthScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background-onboarding.png')}
        resizeMode='stretch'
        style={styles.mainView}
      >
        <Image
          source={require('../../assets/images/logo.svg')}
          contentFit='contain'
          style={styles.logo}
        />
        <Image
          source={require('../../assets/images/omega.png')}
          contentFit='contain'
          style={styles.omega}
        />
        <View style={styles.buttonContainer}>
          <Button label='Zaloguj się' onPress={() => {}} />
          <Button label='Załóż konto' invertedStyle onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: Platform.OS === 'android' ? 20 : 50,
    paddingHorizontal: 15,
  },
  logo: {
    width: '30%',
    height: '10%',
  },
  omega: {
    width: '100%',
    paddingTop: '100%',
    marginLeft: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
