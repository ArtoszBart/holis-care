import React, { PropsWithChildren } from 'react';
import { ImageBackground, View } from 'react-native';

export default function BackgroundWrapper({ children }: PropsWithChildren) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        resizeMode='cover'
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.4 }}
      >
        {children}
      </ImageBackground>
    </View>
  );
}
