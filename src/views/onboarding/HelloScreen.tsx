import { Image } from 'expo-image';
import { ImageBackground, View } from 'react-native';

import CustomText from '../common/CustomText';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function HelloScreen() {
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
            Witamy w Twoim centrum zdrowia
          </CustomText>
          <CustomText style={styles.paragraph}>
            👋 Cześć! Cieszę się, że jesteś. Jestem Holis, Twój osobisty doradca
            profilaktyki zdrowotnej. Razem zadbamy o Twoje zdrowie w wygodny i
            nowoczesny sposób! 🌿✨
          </CustomText>
        </View>
      </ImageBackground>
    </View>
  );
}
