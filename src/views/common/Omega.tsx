import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Omega() {
  return (
    <Image
      source={require('../../assets/images/omega.png')}
      contentFit='contain'
      style={styles.omega}
    />
  );
}

export const styles = StyleSheet.create({
  omega: {
    width: '100%',
    paddingTop: '100%',
    marginLeft: 30,
  },
});
