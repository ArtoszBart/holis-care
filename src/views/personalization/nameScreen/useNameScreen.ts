import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { personalizationSchema } from '../../../models/User';
import { type PersonalizationNavigationProp } from '../../../navigation/personalization';
import { PERSONALIZATION_ROUTES } from '../../../navigation/routes';
import { showToast } from '../../common/toast/toastHelper';
import { usePersonalizationStore } from '../onboardingStore';

const useNameScreen = () => {
  const navigation = useNavigation<PersonalizationNavigationProp>();
  const { setData } = usePersonalizationStore();

  const [isConsentGiven, setConsentGiven] = useState(false);
  const [name, setName] = useState<string>('');

  const handleNext = () => {
    const lastStepSchema = personalizationSchema.pick({
      name: true,
      isConsentGiven: true,
    });
    const { error } = lastStepSchema.safeParse({ name, isConsentGiven });

    if (error) {
      const errorMessage = Object.values(error.flatten().fieldErrors)[0]?.[0];
      return showToast(errorMessage);
    }

    setData({ name });

    console.log(usePersonalizationStore.getState().data);
    navigation.navigate(PERSONALIZATION_ROUTES.GET_STARTED_SCREEN);
  };

  return { setName, isConsentGiven, setConsentGiven, handleNext };
};

export default useNameScreen;
