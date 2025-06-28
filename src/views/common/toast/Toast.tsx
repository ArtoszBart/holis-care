import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';
import { type IToastProps } from './toastHelper';

export function Toast({ props, type }: IToastProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top + 15,
          borderColor: type === 'error' ? COLORS.errorRed : COLORS.successGreen,
        },
      ]}
    >
      <Icon
        icon={type === 'error' ? ICONS.ERROR : ICONS.CHECK}
        style={[
          styles.symbol,
          { color: type === 'error' ? COLORS.errorRed : COLORS.successGreen },
        ]}
      />
      <CustomText style={styles.text}>{props.message}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
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
  },
  text: {
    fontSize: 14,
    fontWeight: '300',
  },
});
