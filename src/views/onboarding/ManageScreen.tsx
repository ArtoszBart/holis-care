import { Image } from 'expo-image';
import { ImageBackground, View } from 'react-native';

import CustomText from '../common/CustomText';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function ManageScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background-onboarding.png')}
        resizeMode='stretch'
        style={styles.mainView}
      >
        <Image
          source={require('../../assets/images/logo.svg')}
          contentFit='contain'
          style={styles.logo}
        />
        <Image
          source={require('../../assets/images/omega.png')}
          contentFit='contain'
          style={styles.omega}
        />
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
      </ImageBackground>
    </View>
  );
}
