import { ImageBackground } from 'expo-image';
import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { COLORS } from '../../../constants/colors';
import usePageWrapper from './usePageWrapper';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  noHeader?: boolean;
  noSafeBottom?: boolean;
  backgroundImage?: number;
  opacity?: number;
}

export default function PageWrapper({
  children,
  style,
  noHeader,
  noSafeBottom,
  backgroundImage = require('../../../assets/images/background.png'),
  opacity = 0.5,
}: Props) {
  const { headerHeight, insets, tabBarHeight } = usePageWrapper();

  const paddingTop = noHeader || !headerHeight ? insets.top : headerHeight;
  const paddingBottom = noSafeBottom ? 0 : (tabBarHeight ?? insets.bottom);

  return (
    <ImageBackground
      source={backgroundImage}
      style={[styles.wrapper, { paddingTop, paddingBottom }]}
      contentFit='cover'
      imageStyle={{ opacity }}
    >
      <View style={[styles.container, style]}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.MAIN,
  },
  container: {
    flex: 1,
    margin: 15,
  },
});
