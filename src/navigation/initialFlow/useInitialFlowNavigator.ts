import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import useLoadingStore from '../../views/common/loader/loaderStore';

const useInitialFlowNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const { setIsLoading, isLoading } = useLoadingStore();

  useEffect(() => {
    const checkOnboarding = async () => {
      setIsLoading(true);

      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem(
          'hasCompletedOnboarding',
        );

        if (hasCompletedOnboarding === null) {
          setIsFirstLaunch(true);
        }
      } catch (err) {
        console.error('Error checking onboarding status', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  return { isFirstLaunch, isLoading };
};

export default useInitialFlowNavigator;
