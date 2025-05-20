import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { type OnboardingNavigationProp } from '../../../../navigation/onboarding';
import { ONBOARDING_ROUTES } from '../../../../navigation/routes';
import useOnboardingNavStore from './store';

const routeList = Object.values(ONBOARDING_ROUTES);

const useOnboardingNav = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();
  const insets = useSafeAreaInsets();
  const { currentNo, setCurrentNo } = useOnboardingNavStore();

  const handleNextPress = () => {
    const nextScreenNo = currentNo < routeList.length - 1 ? currentNo + 1 : 0;

    navigation.navigate(routeList[nextScreenNo]);
    setCurrentNo(nextScreenNo);
  };

  const handleSkipPress = () => {
    const previousScreenNo = routeList.length > 0 ? currentNo - 1 : 4;

    navigation.navigate(routeList[previousScreenNo]);
    setCurrentNo(previousScreenNo);
  };

  return { currentNo, routeList, handleNextPress, handleSkipPress, insets };
};

export default useOnboardingNav;
