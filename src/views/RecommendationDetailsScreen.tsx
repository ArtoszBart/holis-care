import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../constants/colors';
import type { RecommendationDetailsScreenProps } from '../navigation/recommendation';
import Button from './common/Button';
import CustomText from './common/CustomText';
import PageWrapper from './common/PageWrapper';
import { Icon, ICONS } from './common/icon';

export default function RecommendationDetailsScreen({
  route,
}: RecommendationDetailsScreenProps) {
  const { recommendation } = route.params;

  return (
    <PageWrapper style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <View style={styles.badgeContainer}>
          <Icon
            icon={ICONS.CIRCLE}
            style={{ fontSize: 12, color: recommendation.badgeColor }}
          />
          <CustomText style={styles.badgeText}>
            {recommendation.type}
          </CustomText>
        </View>
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

      <Button style={styles.button} label='Zapisz się' onPress={() => {}} />
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
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  badgeText: {
    fontSize: 12,
    color: COLORS.typo4,
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
