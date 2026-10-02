import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../../common/CustomText';

interface IAccountListItem {
  label: string;
  onPress: VoidFunction;
  icon?: ReactNode;
  navigationIcon?: ReactNode;
}

export default function AccountListItem({
  label,
  onPress,
  icon,
  navigationIcon,
}: IAccountListItem) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.labelContainer}>
        {icon}
        <CustomText>{label}</CustomText>
      </View>
      {navigationIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
