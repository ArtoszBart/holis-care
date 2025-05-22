import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  noHeader?: boolean;
  bottomSafeView?: boolean;
  backgroundImage?: unknown;
}

export default function PageWrapper({
  children,
  style,
  noHeader,
  bottomSafeView,
  backgroundImage,
}: Props) {
  const insets = useSafeAreaInsets();

  const margin = 15;
  const margins = {
    marginHorizontal: margin,
    marginTop: noHeader ? insets.top : margin,
    marginBottom: bottomSafeView ? insets.bottom + margin : margin,
  };

  return (
    <View style={styles.wrapper}>
      {!!backgroundImage && (
        <Image
          source={backgroundImage as number}
          contentFit='fill'
          style={styles.backgroundImage}
        />
      )}
      <View style={[styles.container, { ...margins }, style]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
});
