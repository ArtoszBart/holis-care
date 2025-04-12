import { Image } from 'expo-image';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import OnboardingListItem from './components/OnboardingListItem';
import OnboardingNav from './components/OnboardingNav';

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
        <View>
          <Text style={styles.header}>Zbieraj wyniki i badania</Text>
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
      <OnboardingNav />
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
    width: '80%',
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
