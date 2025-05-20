import { View } from 'react-native';

import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import Omega from '../common/Omega';
import PageWrapper from '../common/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function ManageScreen() {
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
          Zarządzaj wizytami z łatwością
        </CustomText>
        <OnboardingListItem
          bullet='🔹'
          text='Korzystaj z podglądu do zaplanowanych wizyt w kalendarzu'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Przypomnimy Ci o nadchodzących wizytach - już nic Ci nie umknie!'
        />
        <OnboardingListItem
          bullet='🔹'
          text='Zmieniaj terminy lub anuluj wizyty bez kontaktu z infolinią'
        />
      </View>
    </PageWrapper>
  );
}
