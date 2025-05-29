import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function BookScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/background-onboarding.png')}
      opacity={1}
      noSafeBottom
    >
      <Logo />
      <Omega />

      <View style={styles.textContainer}>
        <CustomText style={styles.header}>
          Umawiaj wizyty szybko i wygodnie
        </CustomText>
        <OnboardingListItem
          bullet='🔹'
          text='Umów wizytę, badanie lub szczepienie'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Sprawdź dostępne terminy na mapie lub liście'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Otrzymuj spersonalizowane rekomendacje badań'
        />
      </View>
    </PageWrapper>
  );
}
