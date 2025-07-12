import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppStorage, { STORAGE_KEYS } from '../../../../lib/storage';
import { InitialFlowNavigationProp } from '../../../../navigation/initialFlow';
import {
  INITIAL_FLOW_ROUTES,
  ONBOARDING_ROUTES,
} from '../../../../navigation/routes';
import useOnboardingNavStore from '../../../../stores/onboardingNavStore';

const routeList = Object.values(ONBOARDING_ROUTES);

const useOnboardingNav = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const insets = useSafeAreaInsets();
  const { currentNo, setCurrentNo } = useOnboardingNavStore();

  const handleNextPress = async () => {
    const nextScreenNo = currentNo + 1;

    if (nextScreenNo >= routeList.length)
      return navigation.navigate(INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR);

    await AppStorage.set(STORAGE_KEYS.ONBOARDING_COMPLETED, true);
    navigation.navigate(INITIAL_FLOW_ROUTES.ONBOARDING_NAVIGATOR, {
      screen: routeList[nextScreenNo],
    });
    setCurrentNo(nextScreenNo);
  };

  const handleSkipPress = async () => {
    await AppStorage.set(STORAGE_KEYS.ONBOARDING_COMPLETED, true);
    navigation.navigate(INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR);
  };

  return { currentNo, routeList, handleNextPress, handleSkipPress, insets };
};

export default useOnboardingNav;
