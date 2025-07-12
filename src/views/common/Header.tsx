import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';
import CustomText from './CustomText';
import { Icon, ICONS } from './icon';

interface IHeader {
  title?: string;
  transparent?: boolean;
  withBack?: boolean;
}

export default function Header({ title, transparent, withBack }: IHeader) {
  const nav = useNavigation();
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 10;

  return (
    <View
      style={[
        headerStyles.container,
        {
          paddingTop,
          justifyContent: withBack ? 'flex-start' : 'center',
          backgroundColor: transparent ? 'transparent' : 'white',
        },
      ]}
    >
      {withBack && (
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Icon icon={ICONS.ARROW_LEFT} style={headerStyles.icon} />
        </TouchableOpacity>
      )}

      <CustomText
        style={[
          headerStyles.title,
          {
            fontSize: withBack && !transparent ? 16 : 20,
            fontWeight: withBack ? 400 : 700,
          },
        ]}
      >
        {title}
      </CustomText>
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 20,
  },
  icon: {
    fontSize: 24,
    color: COLORS.TYPO_1,
  },
  title: {
    color: COLORS.TYPO_1,
    fontWeight: 700,
  },
});
