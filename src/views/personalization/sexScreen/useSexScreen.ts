import { useNavigation } from '@react-navigation/native';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { usePersonalizationStore } from '../onboardingStore';

const useSexScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const handleSelectSex = (sex: string) => {
    setData({ sex });
    navigation.navigate(PERSONALIZATION_ROUTES.BIRTH_DATE_SCREEN);
  };

  return { handleSelectSex };
};

export default useSexScreen;
