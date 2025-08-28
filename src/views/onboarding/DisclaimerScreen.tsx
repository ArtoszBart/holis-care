import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function DisclaimerScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/backgrounds/background-disclaimer.webp')}
      opacity={1}
      noSafeBottom
    >
      <Logo />

      <View style={styles.textContainer}>
        <CustomText style={styles.header}>Oświadczenie</CustomText>
        <CustomText style={[styles.paragraph, { textAlign: 'center' }]}>
          Aplikacja Holis nie świadczy usług medycznych, profilaktycznych ani
          diagnostycznych. Rekomendacje i informacje prezentowane w aplikacji
          oparte są na dostępnych danych i algorytmach, jednak mają wyłącznie
          charakter edukacyjny i informacyjny. Nie zastępują one profesjonalnej
          porady lekarskiej, diagnostyki ani leczenia. W przypadku pytań
          dotyczących zdrowia należy zawsze skonsultować się z wykwalifikowanym
          pracownikiem ochrony zdrowia.
        </CustomText>
      </View>
    </PageWrapper>
  );
}
