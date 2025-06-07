import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { MAX_BIRTH_DATE } from '../../../constants/age';
import { personalizationSchema } from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { toPayloadDateString } from '../../../utils/dateTime';
import { showToast } from '../../common/toast/toastHelper';
import { usePersonalizationStore } from '../onboardingStore';

const useBirthDateScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const [birthDate, setBirthDate] = useState<Date>(MAX_BIRTH_DATE);

  const handleNext = () => {
    const birthDateSchema = personalizationSchema.pick({ birthDate: true });
    const { error } = birthDateSchema.safeParse({ birthDate });

    if (error) return showToast(error.flatten().fieldErrors.birthDate![0]);

    setData({ birthDate: toPayloadDateString(birthDate) });
    navigation.navigate(PERSONALIZATION_ROUTES.NAME_SCREEN);
  };

  return { birthDate, setBirthDate, handleNext };
};

export default useBirthDateScreen;
