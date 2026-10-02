import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getBadgeConfig } from '../../constants/badges';
import { COLORS } from '../../constants/colors';
import type { RecommendationInfoScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import ScrollView from '../common/scrollView/ScrollView';

export default function RecommendationInfoScreen({
  route,
  navigation,
}: RecommendationInfoScreenProps) {
  const { recommendation } = route.params;
  const { color, title } = getBadgeConfig(recommendation.exam.type);

  return (
    <PageWrapper style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Badge color={color} label={title} style={styles.badge} />
        <CustomText style={styles.title}>{recommendation.exam.name}</CustomText>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.container}>
            <CustomText style={styles.containerTitle}>Opis Wizyty</CustomText>
            <CustomText style={styles.text}>
              {recommendation.exam.description}
            </CustomText>
          </View>
          <View style={styles.container}>
            <CustomText style={styles.containerTitle}>
              Jak się przygotować?
            </CustomText>
            <CustomText style={styles.text}>
              {recommendation.exam.preparation}
            </CustomText>
          </View>
        </View>

        <Button
          style={styles.button}
          label='Dodaj wizytę'
          onPress={() =>
            navigation.navigate(
              RECOMMENDATIONS_ROUTES.RECOMMENDATION_FORM_SCREEN,
              {
                appointment: {
                  ...recommendation,
                  appointmentDate: recommendation.appointmentDate
                    ? recommendation.appointmentDate.toISOString()
                    : null,
                },
              },
            )
          }
        />
      </ScrollView>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
    marginBottom: 0,
  },
  mainContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.MAIN,
    paddingHorizontal: 10,
    paddingVertical: 35,
    gap: 10,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.TYPO_1,
  },
  contentWrapper: {
    gap: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 15,
  },
  container: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.MAIN,
    padding: 10,
    gap: 10,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.TYPO_1,
  },
  text: {
    color: COLORS.TYPO_2,
  },
  button: {
    marginTop: 'auto',
  },
});
