import { StackActions, useNavigation } from '@react-navigation/native';
import { login, NEEDS_PERSONALIZATION } from '../../../auth/authService';
import { useAuthStore } from '../../../config/authStore';
import { type LoginDTO } from '../../../models/Auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../common/loader/loaderStore';
import { showToast } from '../../common/toast/toastHelper';

const useSignInScreen = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { setIsAuth } = useAuthStore();

  const onSubmit = async (loginData: LoginDTO): Promise<void> => {
    setIsLoading(true);
    const isUserAuth = await login(loginData);
    setIsLoading(false);

    if (!isUserAuth) return showToast('Błędny e-mail lub hasło');

    if (isUserAuth === NEEDS_PERSONALIZATION)
      return navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);

    setIsAuth(true);
  };

  const onRegisterButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
  };

  return { onSubmit, onRegisterButtonPress };
};

export default useSignInScreen;
