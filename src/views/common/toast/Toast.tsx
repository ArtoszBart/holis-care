import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ToastConfigParams } from 'react-native-toast-message';
import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface ToastProps {
  message: string;
}

export function Toast({ props }: ToastConfigParams<ToastProps>) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top + 15 }]}>
      <Icon icon={ICONS.ERROR} style={styles.symbol} />
      <CustomText style={styles.text}>{props.message}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.errorRed,
    borderRadius: 999,
    backgroundColor: '#f5f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  symbol: {
    fontSize: 24,
    color: COLORS.errorRed,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
  },
});
