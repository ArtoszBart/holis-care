import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getBadgeConfig } from '../../../constants/badges';
import { COLORS } from '../../../constants/colors';
import { getMonthString } from '../../../constants/lang/polish';
import { type Appointment } from '../../../models/Appointment';
import { type MainNavigationProp } from '../../../navigation/main';
import {
  MAIN_ROUTES,
  RECOMMENDATIONS_ROUTES,
} from '../../../navigation/routes';
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
  const navigation = useNavigation<MainNavigationProp>();
  const { color, title } = getBadgeConfig(recommendation.exam.type);

  return (
    <TouchableOpacity
      style={[styles.card, { width: summary ? 284 : '100%' }]}
      onPress={() => {
        navigation.navigate(MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR, {
          screen: RECOMMENDATIONS_ROUTES.RECOMMENDATION_INFO_SCREEN,
          params: {
            recommendation: {
              ...recommendation,
              appointmentDate: recommendation.appointmentDate?.toISOString(),
            },
          },
        });
      }}
    >
      <View style={styles.mainContainer}>
        <Badge color={color} label={title} />

        <CustomText style={styles.title}>{recommendation.exam.name}</CustomText>

        <CustomText style={styles.period}>
          co {recommendation.periodMonths}{' '}
          {getMonthString(recommendation.periodMonths)}
        </CustomText>
      </View>

      <View style={[styles.actionButton, { justifyContent: 'center' }]}>
        <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.actionButtonIcon} />
      </View>
    </TouchableOpacity>
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
