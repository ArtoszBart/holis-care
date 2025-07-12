import { useNavigation } from '@react-navigation/native';
import { updateSelfRequest } from '../../api/user';
import AppStorage, { STORAGE_KEYS } from '../../lib/storage';
import { type User, type UserForm } from '../../models/User';
import { type AccountNavigationProp } from '../../navigation/account';
import useLoadingStore from '../../stores/loaderStore';
import { useUserStore } from '../../stores/userStore';
import AsyncAlert from '../common/AsyncAlert';
import { showToast, TOAST_TYPE } from '../common/toast';

const useAccountSettings = () => {
  const navigation = useNavigation<AccountNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { user, setUser } = useUserStore();

  const onSaveButtonPress = async (userFormData: UserForm): Promise<void> => {
    setIsLoading(true);
    const storageUser = await AppStorage.get<User>(STORAGE_KEYS.USER);
    if (!storageUser?.sex) {
      setIsLoading(false);
      return showToast('Nie można odczytać danych użytkownika');
    }

    const user = {
      ...userFormData,
      sex: storageUser.sex,
    };
    const response = await updateSelfRequest(user);
    if (!response.ok) {
      setIsLoading(false);
      return showToast('Nie udało się zapisać danych');
    }

    console.log(response.data);

    await AppStorage.set(STORAGE_KEYS.USER, response.data);
    setUser(response.data);

    setIsLoading(false);
    showToast('Zapisano zmiany', TOAST_TYPE.SUCCESS);
    navigation.pop();
  };

  const onCancelButtonPress = async (): Promise<void> => {
    const confirmed = await AsyncAlert(
      'Czy napewno chcesz opuścić ekran edycji?',
      'Niezapisane dane zostaną utracone',
    );
    if (!confirmed) return;

    navigation.pop();
  };

  return { onCancelButtonPress, onSaveButtonPress, user };
};

export default useAccountSettings;
