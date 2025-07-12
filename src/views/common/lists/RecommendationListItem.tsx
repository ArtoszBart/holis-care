import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { Recommendation } from '../../../models/Recommendation';
import { RecommendationNavigationProp } from '../../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../../navigation/routes';
import Badge from '../Badge';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface Props {
  recommendation: Recommendation;
  summary?: boolean;
}

export default function RecommendationListItem({
  recommendation,
  summary,
}: Props) {
  const navigation = useNavigation<RecommendationNavigationProp>();

  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.mainContainer}>
        <Badge color={recommendation.badgeColor} label={recommendation.type} />

        <CustomText style={styles.title}>{recommendation.title}</CustomText>
        <CustomText style={styles.period}>{recommendation.period}</CustomText>
        <CustomText style={styles.additionalInfo}>
          {recommendation.additionalInfo}
        </CustomText>
      </View>

      {summary ? (
        <TouchableOpacity style={styles.actionButton}>
          <Icon icon={ICONS.BELL_FILL} style={styles.summaryActionButtonIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.actionButton, { justifyContent: 'center' }]}
          onPress={() =>
            navigation.navigate(
              RECOMMENDATIONS_ROUTES.RECOMMENDATION_INFO_SCREEN,
              { recommendation },
            )
          }
        >
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.actionButtonIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.MAIN,
    padding: 16,
    borderRadius: 8,
    gap: 4,
    width: 284,
  },
  mainContainer: {
    flexShrink: 1,
  },
  title: {
    fontWeight: 700,
    color: COLORS.TYPO_1,
  },
  period: {
    color: COLORS.TYPO_1,
    fontSize: 12,
  },
  additionalInfo: {
    marginTop: 5,
    color: COLORS.TYPO_3,
    fontSize: 12,
  },
  actionButton: {
    marginLeft: 'auto',
    paddingLeft: 10,
  },
  summaryActionButtonIcon: {
    fontSize: 22,
    color: COLORS.TYPO_4,
  },
  actionButtonIcon: {
    fontSize: 25,
    color: COLORS.ACCENT,
  },
});
