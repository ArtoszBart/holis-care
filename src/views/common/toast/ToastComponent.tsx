import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';
import { Icon } from '../icon';
import { type IToastProps } from './types';

export default function ToastComponent({ props }: IToastProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top + 15,
          borderColor: props.accentColor,
        },
      ]}
    >
      <Icon
        icon={props.icon}
        style={[styles.symbol, { color: props.accentColor }]}
      />
      <CustomText style={styles.text}>{props.message}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 999,
    backgroundColor: COLORS.TOAST_BACKGROUND,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  symbol: {
    fontSize: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
  },
});
