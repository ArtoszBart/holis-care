import { Image } from 'expo-image';
import { ImageBackground, View } from 'react-native';

import CustomText from '../common/CustomText';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function TipsScreen() {
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
      </ImageBackground>
    </View>
  );
}
