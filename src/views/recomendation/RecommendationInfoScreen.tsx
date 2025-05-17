import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import type { RecommendationInfoScreenProps } from '../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../navigation/routes';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import PageWrapper from '../common/PageWrapper';

export default function RecommendationInfoScreen({
  route,
  navigation,
}: RecommendationInfoScreenProps) {
  const { recommendation } = route.params;

  return (
    <PageWrapper style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <Badge color={recommendation.badgeColor} label={recommendation.type} />

        <CustomText style={styles.title}>{recommendation.title}</CustomText>
        <CustomText style={styles.additionalInfo}>
          {recommendation.additionalInfo}
        </CustomText>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <CustomText style={styles.containerTitle}>Opis Wizyty</CustomText>
          <CustomText style={styles.text}>
            {recommendation.description}
          </CustomText>
        </View>
        <View style={styles.container}>
          <CustomText style={styles.containerTitle}>
            Jak się przygotować?
          </CustomText>
          <CustomText style={styles.text}>
            {recommendation.preparation}
          </CustomText>
        </View>
      </View>

      <Button
        style={styles.button}
        label='Dodaj wizytę'
        onPress={() =>
          navigation.navigate(
            RECOMMENDATIONS_ROUTES.RECOMMENDATION_FORM_SCREEN,
            { recommendation },
          )
        }
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingBottom: 10,
    gap: 20,
  },
  mainContainer: {
    gap: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.typo1,
  },
  additionalInfo: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: COLORS.typo3,
  },
  contentWrapper: {
    gap: 10,
  },
  container: {
    gap: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: COLORS.typo1,
  },
  text: {
    color: COLORS.typo2,
  },
  button: {
    marginTop: 'auto',
  },
});
