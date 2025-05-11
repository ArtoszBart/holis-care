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
  const marginTop = noHeader ? 0 : 70;
  // TODO: apply to screens without tab navigator
  const paddingBottom = bottomSafeView
    ? Platform.OS === 'android'
      ? 20
      : 50
    : 0;

  return (
    <View style={[styles.container, { paddingBottom }]}>
      <View style={[styles.wrapper, { marginTop: insets.top }]}>
        <View
          style={[
            styles.wrapper,
            { paddingHorizontal: 15 },
            style,
            { marginTop },
          ]}
        >
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
