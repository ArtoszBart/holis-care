import React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  noHeader?: boolean;
  bottomSafeView?: boolean;
}

export default function PageWrapper({
  children,
  style,
  noHeader,
  bottomSafeView,
}: Props) {
  const insets = useSafeAreaInsets();
  const marginTop = noHeader ? insets.top : 0;
  // TODO: apply to screens without tab navigator
  const paddingBottom = bottomSafeView
    ? Platform.OS === 'android'
      ? 20
      : 50
    : 0;

  return (
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
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
