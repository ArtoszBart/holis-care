import { useNavigation } from '@react-navigation/native';
import { UserDTO } from '../../models/User';
import { AccountNavigationProp } from '../../navigation/account';
import AsyncAlert from '../common/AsyncAlert';
import useLoadingStore from '../common/loader/loaderStore';

const useAccountSettings = () => {
  const navigation = useNavigation<AccountNavigationProp>();
  const { setIsLoading } = useLoadingStore();

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

  return { onCancelButtonPress, onSaveButtonPress };
};

export default useAccountSettings;
