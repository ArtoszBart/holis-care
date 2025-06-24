import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InitialFlowNavigationProp } from '../../../../navigation/initialFlow';
import {
  INITIAL_FLOW_ROUTES,
  ONBOARDING_ROUTES,
} from '../../../../navigation/routes';
import useOnboardingNavStore from './store';

const routeList = Object.values(ONBOARDING_ROUTES);

const useOnboardingNav = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const insets = useSafeAreaInsets();
  const { currentNo, setCurrentNo } = useOnboardingNavStore();

  const handleNextPress = async () => {
    const nextScreenNo = currentNo + 1;

    if (nextScreenNo >= routeList.length)
      return navigation.navigate(INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR);

    await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
    navigation.navigate(INITIAL_FLOW_ROUTES.ONBOARDING_NAVIGATOR, {
      screen: routeList[nextScreenNo],
    });
    setCurrentNo(nextScreenNo);
  };

  const handleSkipPress = async () => {
    await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
    navigation.navigate(INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR);
  };

  return { currentNo, routeList, handleNextPress, handleSkipPress, insets };
};

export default useOnboardingNav;
