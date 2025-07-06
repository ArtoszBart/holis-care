import { useEffect, useState } from 'react';
import AppStorage, { STORAGE_KEYS } from '../../lib/storage';
import useLoadingStore from '../../views/common/loader/loaderStore';

const useInitialFlowNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const { setIsLoading } = useLoadingStore();

  useEffect(() => {
    const checkOnboarding = async () => {
      setIsLoading(true);

      const hasCompletedOnboarding = await AppStorage.get(
        STORAGE_KEYS.ONBOARDING_COMPLETED,
      );

      if (hasCompletedOnboarding === null) {
        setIsFirstLaunch(true);
      }

      setIsLoading(false);
    };

    checkOnboarding();
  }, []);

  return { isFirstLaunch };
};

export default useInitialFlowNavigator;
