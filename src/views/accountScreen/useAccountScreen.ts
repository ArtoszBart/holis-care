import { logout } from '../../auth/authService';
import useLoadingStore from '../../stores/loaderStore';
import { showToast } from '../common/toast';

const useAccountScreen = () => {
  const { setIsLoading } = useLoadingStore();

  const onSignOut = async (): Promise<void> => {
    setIsLoading(true);
    const result = await logout();
    setIsLoading(false);

    if (!result) showToast();
  };

  return { onSignOut };
};

export default useAccountScreen;
