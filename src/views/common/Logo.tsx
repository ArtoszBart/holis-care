import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../../assets/images/logo.svg')}
      contentFit='contain'
      style={styles.logo}
    />
  );
}

export const styles = StyleSheet.create({
  logo: {
    width: '30%',
    height: '10%',
  },
});
