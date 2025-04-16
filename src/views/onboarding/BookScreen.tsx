import { Image } from 'expo-image';
import { ImageBackground, View } from 'react-native';

import CustomText from '../common/CustomText';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function BookScreen() {
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
      </ImageBackground>
    </View>
  );
}
