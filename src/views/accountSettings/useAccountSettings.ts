import { useNavigation } from '@react-navigation/native';
import { type UserDTO } from '../../models/User';
import { type AccountNavigationProp } from '../../navigation/account';
import { useUserStore } from '../../stores/userStore';
import AsyncAlert from '../common/AsyncAlert';
import useLoadingStore from '../common/loader/loaderStore';

const useAccountSettings = () => {
  const navigation = useNavigation<AccountNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { user } = useUserStore();

  const onCancelButtonPress = async (): Promise<void> => {
    const confirmed = await AsyncAlert(
      'Czy napewno chcesz opuścić ekran edycji?',
      'Niezapisane dane zostaną utracone',
    );
    if (!confirmed) return;

    navigation.pop();
  };

  const onSaveButtonPress = (user: UserDTO): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.pop();
    }, 3000);
  };

  return { onCancelButtonPress, onSaveButtonPress, user };
};

export default useAccountSettings;
