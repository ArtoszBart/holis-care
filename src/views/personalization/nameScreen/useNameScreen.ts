import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createSelfRequest } from '../../../api/user';
import {
  PersonalizationDTO,
  personalizationSchema,
} from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { showToast } from '../../common/toast/toastHelper';
import { usePersonalizationStore } from '../onboardingStore';

const useNameScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const [isConsentGiven, setConsentGiven] = useState(false);
  const [name, setName] = useState<string>('');

  const handleNext = async () => {
    const firstName = name.trim();
    const lastStepSchema = personalizationSchema.pick({
      firstName: true,
      isConsentGiven: true,
    });
    const { error } = lastStepSchema.safeParse({ firstName, isConsentGiven });

    if (error) {
      const errorMessage = Object.values(error.flatten().fieldErrors)[0]?.[0];
      return showToast(errorMessage);
    }

    setData({ firstName });

    const user = JSON.parse((await AsyncStorage.getItem('user'))!);
    const userData = {
      ...usePersonalizationStore.getState().data,
      email: user.email,
    } as PersonalizationDTO;

    const response = await createSelfRequest(userData);
    if (!response.ok) return showToast('Wystąpił nieoczekiwany błąd');

    await AsyncStorage.setItem('user', JSON.stringify(response.data));
    navigation.navigate(PERSONALIZATION_ROUTES.GET_STARTED_SCREEN);
  };

  return { setName, isConsentGiven, setConsentGiven, handleNext };
};

export default useNameScreen;
