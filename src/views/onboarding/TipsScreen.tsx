import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function TipsScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/backgrounds/background-tips.webp')}
      opacity={1}
      noSafeBottom
    >
      <Logo />

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
