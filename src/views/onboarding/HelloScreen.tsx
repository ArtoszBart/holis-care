import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function HelloScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/backgrounds/background-hello.webp')}
      opacity={1}
      noSafeBottom
    >
      <Logo />

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
    </PageWrapper>
  );
}
