import { View } from 'react-native';

import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function CollectScreen() {
  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/background-onboarding.png')}
      noHeader
    >
      <Logo />
      <Omega />

      <View style={styles.textContainer}>
        <CustomText style={styles.header}>Zbieraj wyniki i badania</CustomText>
        <OnboardingListItem
          bullet='🔹'
          text='Korzystaj z dostępu do wyników badań w apce'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Dodawaj własne wyniki - śledź postępy'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Śledź historię wizyt i badań - od teraz jest zawsze pod ręką'
        />
      </View>
    </PageWrapper>
  );
}
