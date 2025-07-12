import { useNavigation } from '@react-navigation/native';
import { SEX } from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { usePersonalizationStore } from '../../../stores/onboardingStore';

const useSexScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const handleSelectSex = (sex: SEX) => {
    setData({ sex });
    navigation.navigate(PERSONALIZATION_ROUTES.BIRTH_DATE_SCREEN);
  };

  return { handleSelectSex };
};

export default useSexScreen;
