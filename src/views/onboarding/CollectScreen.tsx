import { Image } from 'expo-image';
import { ImageBackground, View } from 'react-native';

import CustomText from '../common/CustomText';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function CollectScreen() {
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
            Zbieraj wyniki i badania
          </CustomText>
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
      </ImageBackground>
    </View>
  );
}
