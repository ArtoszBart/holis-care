import { Image } from 'expo-image';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import CustomText from '../common/CustomText';

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
        <View>
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: '30%',
    height: '10%',
  },
  omega: {
    width: '100%',
    paddingTop: '100%',
    marginLeft: 30,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.typo1,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.typo2,
  },
});
