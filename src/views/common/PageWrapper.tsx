import { Image } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
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
  const marginTop = noHeader ? insets.top : 10;
  // TODO: apply to screens without tab navigator
  const paddingBottom = bottomSafeView
    ? Platform.OS === 'android'
      ? 20
      : 50
    : 10;

  return (
    <View style={styles.wrapper}>
      <Image
        source={backgroundImage as number}
        contentFit='fill'
        style={styles.backgroundImage}
      />
      <View
        style={[
          styles.wrapper,
          { paddingHorizontal: 15, paddingBottom },
          style,
          { marginTop },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
