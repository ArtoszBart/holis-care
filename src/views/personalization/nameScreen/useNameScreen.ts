import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createSelfRequest } from '../../../api/user';
import AppStorage, { STORAGE_KEYS } from '../../../lib/storage';
import {
  type PersonalizationDTO,
  personalizationSchema,
} from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { usePersonalizationStore } from '../../../stores/personalizationStore';
import { useUserStore } from '../../../stores/userStore';
import { showToast } from '../../common/toast';

const useNameScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();
  const { setUser } = useUserStore();

  const [isConsentGiven, setConsentGiven] = useState(false);
  const [name, setName] = useState<string>('');

  const handleNext = async () => {
    const errorMessage = validateData();
    if (errorMessage) return showToast(errorMessage);

    const userData = await prepareData();
    if (!userData) return showToast();

    const response = await createSelfRequest(userData);
    if (!response.ok) return;

    await AppStorage.set(STORAGE_KEYS.USER, response.data);
    setUser(response.data);
    navigation.navigate(PERSONALIZATION_ROUTES.GET_STARTED_SCREEN);
  };

  const validateData = () => {
    const firstName = name.trim();
    const lastStepSchema = personalizationSchema.pick({
      firstName: true,
      isConsentGiven: true,
    });
    const { error } = lastStepSchema.safeParse({ firstName, isConsentGiven });

    if (error) return Object.values(error.flatten().fieldErrors)[0]?.[0];
  };

  const prepareData = async () => {
    setData({ firstName: name.trim() });

    const user = await AppStorage.get<{ email: string }>(STORAGE_KEYS.USER);
    if (!user) return;

    return {
      ...usePersonalizationStore.getState().data,
      email: user.email,
    } as PersonalizationDTO;
  };

  return { setName, isConsentGiven, setConsentGiven, handleNext };
};

export default useNameScreen;
