import { useNavigation } from '@react-navigation/native';
import { DEMO_USERS } from '../../demo/credentials';
import AppStorage, { STORAGE_KEYS } from '../../lib/storage';
import { User, type UserForm } from '../../models/User';
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

    const demoUser = DEMO_USERS.find(
      (user) => user.email === userFormData.email,
    );
    if (!demoUser) return showToast();
    demoUser.firstName = userFormData.firstName;
    demoUser.lastName = userFormData.lastName;
    demoUser.dateOfBirth = new Date(userFormData.dateOfBirth);
    demoUser.phoneNumber = userFormData.phoneNumber;
    demoUser.city = userFormData.city;

    await AppStorage.set(STORAGE_KEYS.USER, demoUser);
    setUser(demoUser as User);

    setIsLoading(false);
    showToast('Zapisano zmiany', TOAST_TYPE.SUCCESS);
    navigation.pop();
  };

  const onCancelButtonPress = async (): Promise<void> => {
    const confirmed = await AsyncAlert(
      'Czy na pewno chcesz opuścić ekran edycji?',
      'Niezapisane dane zostaną utracone',
    );
    if (!confirmed) return;

    navigation.pop();
  };

  return { onCancelButtonPress, onSaveButtonPress, user };
};

export default useAccountSettings;
