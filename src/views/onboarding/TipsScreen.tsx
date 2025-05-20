import { View } from 'react-native';

import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function TipsScreen() {
  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/background-onboarding.png')}
      noHeader
    >
      <Logo />
      <Omega />

      <View style={styles.textContainer}>
        <CustomText style={styles.header}>
          Korzystaj ze wskazówek Holiego
        </CustomText>
        <OnboardingListItem
          bullet='💡'
          text='Zacznij od małych kroków, żeby wdrożyć wielkie zmiany!'
        />
        <OnboardingListItem
          bullet='🧠'
          text='Holi dostarczy Ci krótkie, praktyczne porady dotyczące zdrowia i profilaktyki.'
        />
        <OnboardingListItem
          bullet='🌱'
          text='Zadbaj o siebie na co dzień i czerp wiedzę w prosty, przystępny sposób!'
        />
      </View>
    </PageWrapper>
  );
}
