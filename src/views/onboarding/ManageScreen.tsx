import { Image } from 'expo-image';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import OnboardingListItem from './components/OnboardingListItem';

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
        <View>
          <Text style={styles.header}>Zarządzaj wizytami z łatwością</Text>
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
    marginLeft: 180,
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
