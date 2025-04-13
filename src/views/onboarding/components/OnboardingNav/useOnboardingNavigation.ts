import { useNavigation } from '@react-navigation/native';

import { ONBOARDING_ROUTES } from '../../../../constants/routes';
import { type OnboardingNavigationProp } from '../../../../navigation/onboarding';
import useOnboardingNavStore from './store';

const routeList = Object.values(ONBOARDING_ROUTES);

const useOnboardingNav = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();
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

  return { currentNo, routeList, handleNextPress, handleSkipPress };
};

export default useOnboardingNav;
