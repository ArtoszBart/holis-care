import { usePreventRemove } from '@react-navigation/native';
import { View } from 'react-native';
import { COLORS } from '../../constants/colors';
import CustomText from '../common/CustomText';
import Logo from '../common/Logo';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import OnboardingListItem from './components/OnboardingListItem';
import { onboardingScreenStyles as styles } from './onboardingScreen.styles';

export default function ManageScreen() {
  usePreventRemove(true, () => {});

  return (
    <PageWrapper
      style={styles.container}
      backgroundImage={require('../../assets/images/backgrounds/background-manage.webp')}
      opacity={1}
      noSafeBottom
    >
      <Logo />

      <View
        style={[styles.textContainer, { backgroundColor: COLORS.DARK_OPACITY }]}
      >
        <CustomText style={[styles.header, { color: COLORS.BORDER }]}>
          Zarządzaj wizytami z łatwością
        </CustomText>
        <OnboardingListItem
          bullet='🔹'
          text='Korzystaj z podglądu do zaplanowanych wizyt w kalendarzu'
          style={{ color: COLORS.BORDER }}
        />
        <OnboardingListItem
          bullet='🔹'
          text='Przypomnimy Ci o nadchodzących wizytach - już nic Ci nie umknie!'
          style={{ color: COLORS.BORDER }}
        />
        <OnboardingListItem
          bullet='🔹'
          text='Zmieniaj terminy lub anuluj wizyty bez kontaktu z infolinią'
          style={{ color: COLORS.BORDER }}
        />
      </View>
    </PageWrapper>
  );
}
