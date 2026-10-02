import { StackActions, useNavigation } from '@react-navigation/native';
import { signUpRequest } from '../../../api/auth';
import { type RegisterDTO } from '../../../models/Auth';
import { type AuthNavigationProp } from '../../../navigation/auth';
import { AUTH_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../../stores/loaderStore';
import { showToast } from '../../common/toast';

const useSignUpScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (registerData: RegisterDTO): Promise<void> => {
    setIsLoading(true);
    const response = await signUpRequest(registerData);
    setIsLoading(false);

    if (response.ok) {
      navigation.navigate(AUTH_ROUTES.CONFIRMATION_SCREEN, {
        userEmail: registerData.email,
      });
    } else if (response.error?.__type === 'UsernameExistsException') {
      showToast('Użytkownik o takim adresie e-mail już istnieje');
    } else if (response.error) {
      showToast('Formularz zawiera błędy');
    }
  };

  const onLoginButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_IN_SCREEN));
  };

  return { onSubmit, onLoginButtonPress };
};

export default useSignUpScreen;
