import { useEffect, useState } from 'react';
import AppStorage, { STORAGE_KEYS } from '../../lib/storage';

const useInitialFlowNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return { isFirstLaunch, isLoading };
};

export default useInitialFlowNavigator;
