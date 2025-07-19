import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';
import { Icon, ICONS } from '../../common/icon';

interface IProps {
  title?: string;
  text: string;
  onClick?: () => void;
}

export default function SummaryListItemPlaceholder({
  title,
  text,
  onClick,
}: IProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onClick}>
      {onClick && <Icon icon={ICONS.PLUS} style={styles.icon} />}
      {title && <CustomText style={styles.title}>{title}</CustomText>}
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
  title: {
    color: COLORS.TYPO_3,
    textAlign: 'center',
    fontSize: 14,
  },
  text: {
    color: COLORS.TYPO_3,
    textAlign: 'center',
    fontSize: 10,
  },
});
