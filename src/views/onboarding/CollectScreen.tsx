import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function CollectScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/backgrounds/background-collect.webp')}
      opacity={1}
      noSafeBottom
    >
      <Logo />

      <View style={styles.textContainer}>
        <CustomText style={styles.header}>Zbieraj wyniki i badania</CustomText>
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
    </PageWrapper>
  );
}
