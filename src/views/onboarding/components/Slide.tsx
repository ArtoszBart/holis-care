import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';
import Logo from '../../common/Logo';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import { type SlideItem } from '../utils/types';
import OnboardingListItem from './OnboardingListItem';

const { width } = Dimensions.get('window');

export default function Slide({ item }: { item: SlideItem }) {
  return (
    <View style={{ width }}>
      <PageWrapper
        style={styles.container}
        backgroundImage={item.image}
        opacity={1}
        noSafeBottom
      >
        <Logo />

        <View style={styles.textContainer}>
          <CustomText style={styles.header}>{item.header}</CustomText>
          {item.paragraph && (
            <CustomText style={styles.paragraph}>{item.paragraph}</CustomText>
          )}
          {item.list?.map((listItem, idx) => (
            <OnboardingListItem
              key={idx}
              bullet={item.listBullets![idx] || item.listBullets![0]}
              text={listItem}
            />
          ))}
        </View>
      </PageWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 50,
  },
  textContainer: {
    width: '100%',
    backgroundColor: COLORS.MAIN_OPACITY_1,
    padding: 15,
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.TYPO_1,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.TYPO_2,
  },
});
