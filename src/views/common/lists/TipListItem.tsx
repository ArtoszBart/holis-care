import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { Tip } from '../../../models/Tip';
import CustomText from '../CustomText';
import LinkButton from '../LinkButton';
import { Icon, ICONS } from '../icon';

interface Props {
  tip: Tip;
  summary?: boolean;
}

export default function TipListItem({ tip, summary }: Props) {
  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.main}>
        <CustomText style={styles.title}>{tip.text}</CustomText>
        <LinkButton
          label={tip.actionText}
          onPress={() => {}}
          textStyle={{ color: COLORS.ACCENT }}
        />
      </View>
      <TouchableOpacity>
        {tip.userLiked ? (
          <Icon icon={ICONS.HEART} style={styles.heartIcon} />
        ) : (
          <Icon icon={ICONS.HEART_OUTLINE} style={styles.heartIcon} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.MAIN,
    padding: 16,
    borderRadius: 8,
    gap: 14,
  },
  main: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    gap: 4,
  },
  title: {
    color: COLORS.TYPO_1,
  },
  heartIcon: {
    fontSize: 22,
    color: COLORS.TYPO_4,
  },
});
