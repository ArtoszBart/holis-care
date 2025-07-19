import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface IProps {
  title?: string;
  text: string;
  onClick?: () => void;
  showIcon?: boolean;
  summary?: boolean;
}

export default function ListItemPlaceholder({
  title,
  text,
  onClick,
  showIcon,
  summary,
}: IProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { width: summary ? 284 : '100%' }]}
      onPress={onClick}
      disabled={!onClick}
    >
      {onClick && showIcon && <Icon icon={ICONS.PLUS} style={styles.icon} />}
      {title && <CustomText style={styles.title}>{title}</CustomText>}
      <CustomText style={styles.text}>{text}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 108,
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
