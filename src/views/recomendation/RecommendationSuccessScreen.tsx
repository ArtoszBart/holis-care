import {
  CompositeNavigationProp,
  useNavigation,
  usePreventRemove,
} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { MainNavigationProp } from '../../navigation/main';
import { RecommendationNavigationProp } from '../../navigation/recommendation';
import { MAIN_ROUTES } from '../../navigation/routes';
import Button from '../common/Button';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/pageWrapper/PageWrapper';

type ThisNavigationProp = CompositeNavigationProp<
  RecommendationNavigationProp,
  MainNavigationProp
>;

export default function RecommendationSuccessScreen() {
  usePreventRemove(true, () => {});
  const navigation = useNavigation<ThisNavigationProp>();

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/background-onboarding.png')}
      opacity={1}
      noHeader
    >
      <Logo />

      <View>
        <CustomText style={styles.header}>Udało się!</CustomText>
        <CustomText>Twoja wizyta została zarezerwowana.</CustomText>
      </View>

      <Omega />

      <View style={styles.buttonContainer}>
        <Button
          label='Umów nową wizytę'
          onPress={() => navigation.popToTop()}
        />
        <Button
          label='Zamknij'
          onPress={() => navigation.navigate(MAIN_ROUTES.APPOINTMENTS_SCREEN)}
          invertedStyle
        />
      </View>
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.typo1,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});
