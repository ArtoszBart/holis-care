import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';
import { Icon, ICONS } from '../../common/icon';

interface IProps {
  text: string;
  onClick: () => void;
}

export default function SummaryListItemPlaceholder({ text, onClick }: IProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onClick}>
      <Icon icon={ICONS.PLUS} style={styles.icon} />
      <CustomText style={styles.text}>{text}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 108,
    width: 284,
    backgroundColor: COLORS.MAIN_OPACITY_2,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    backgroundColor: COLORS.MAIN,
    color: COLORS.TYPO_3,
    fontSize: 22,
    padding: 10,
    borderRadius: 999,
  },
  text: {
    color: COLORS.TYPO_3,
    textAlign: 'center',
    fontSize: 10,
  },
});
