import React from 'react';
import {
  ImageBackground,
  type ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  image?: ImageSourcePropType;
  opacity?: number;
}

export default function BackgroundWrapper({
  children,
  style,
  image = require('../../assets/images/background.png'),
  opacity = 0.3,
}: Props) {
  const insets = useSafeAreaInsets();
  const marginTop = insets.top + 70;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={styles.mainView}
        imageStyle={{ opacity }}
      >
        <View style={[styles.wrapper, { marginTop }, style]}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 20 : 50,
    paddingHorizontal: 15,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
