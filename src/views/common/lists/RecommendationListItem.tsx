import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getBadgeConfig } from '../../../constants/badges';
import { COLORS } from '../../../constants/colors';
import { getMonthString } from '../../../constants/lang/polish';
import { type Appointment } from '../../../models/Appointment';
import { type RecommendationNavigationProp } from '../../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../../navigation/routes';
import Badge from '../Badge';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface Props {
  item: Appointment;
  summary?: boolean;
}

export default function RecommendationListItem({
  item: recommendation,
  summary,
}: Props) {
  const navigation = useNavigation<RecommendationNavigationProp>();
  const { color, title } = getBadgeConfig(recommendation.exam.type);

  return (
    <View style={[styles.card, { width: summary ? 284 : '100%' }]}>
      <View style={styles.mainContainer}>
        <Badge color={color} label={title} />

        <CustomText style={styles.title}>{recommendation.exam.name}</CustomText>

        <CustomText style={styles.period}>
          co {recommendation.periodMonths}{' '}
          {getMonthString(recommendation.periodMonths)}
        </CustomText>
      </View>

      {summary ? (
        <TouchableOpacity style={styles.actionButton}>
          {/* <Icon icon={ICONS.BELL_FILL} style={styles.summaryActionButtonIcon} /> */}
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
    gap: 4,
  },
  title: {
    fontWeight: 700,
    color: COLORS.TYPO_1,
  },
  period: {
    color: COLORS.TYPO_1,
    fontSize: 12,
    marginTop: 4,
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
