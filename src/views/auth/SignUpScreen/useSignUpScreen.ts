import { StackActions, useNavigation } from '@react-navigation/native';
import { DEMO_USERS } from '../../../demo/credentials';
import { type RegisterDTO } from '../../../models/Auth';
import { type AuthNavigationProp } from '../../../navigation/auth';
import { AUTH_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../../stores/loaderStore';
import { showToast, TOAST_TYPE } from '../../common/toast';

const useSignUpScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (registerData: RegisterDTO): Promise<void> => {
    setIsLoading(true);

    const duplication = DEMO_USERS.find(
      (credentials) => credentials.email === registerData.email,
    );
    if (duplication) {
      setIsLoading(false);
      return showToast('Użytkownik o takim adresie e-mail już istnieje');
    }

    DEMO_USERS.push({
      email: registerData.email,
      password: registerData.password,
    });

    setIsLoading(false);

    showToast('Utowrzono konto tymczasowe', TOAST_TYPE.SUCCESS);

    navigation.navigate(AUTH_ROUTES.SIGN_IN_SCREEN);
  };

  const onLoginButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_IN_SCREEN));
  };

  return { onSubmit, onLoginButtonPress };
};

export default useSignUpScreen;
