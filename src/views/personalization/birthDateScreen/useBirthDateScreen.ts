import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { MAX_BIRTH_DATE } from '../../../constants/age';
import { personalizationSchema } from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { usePersonalizationStore } from '../../../stores/personalizationStore';
import { toPayloadDateString } from '../../../utils/dateTime';
import { showToast } from '../../common/toast';

const useBirthDateScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const [dateOfBirth, setDateOfBirth] = useState<Date>(MAX_BIRTH_DATE);

  const handleNext = () => {
    const birthDateSchema = personalizationSchema.pick({ dateOfBirth: true });
    const { error } = birthDateSchema.safeParse({ dateOfBirth });

    if (error) return showToast(error.flatten().fieldErrors.dateOfBirth![0]);

    setData({ dateOfBirth: toPayloadDateString(dateOfBirth) });
    navigation.navigate(PERSONALIZATION_ROUTES.NAME_SCREEN);
  };

  return { dateOfBirth, setDateOfBirth, handleNext };
};

export default useBirthDateScreen;
