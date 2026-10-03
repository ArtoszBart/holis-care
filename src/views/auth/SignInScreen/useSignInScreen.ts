import { StackActions, useNavigation } from '@react-navigation/native';
import { login, LOGIN_STATE } from '../../../auth/authService';
import { type LoginDTO } from '../../../models/Auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../../navigation/routes';
import { useAuthStore } from '../../../stores/authStore';
import useLoadingStore from '../../../stores/loaderStore';
import { showToast } from '../../common/toast';

const useSignInScreen = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { setIsAuth } = useAuthStore();

  const onSubmit = async (loginData: LoginDTO): Promise<void> => {
    setIsLoading(true);
    const isUserAuth = await login(loginData);
    setIsLoading(false);

    switch (isUserAuth) {
      case LOGIN_STATE.AUTHENTICATED: {
        return setIsAuth(true);
      }
      case LOGIN_STATE.UNAUTHENTICATED:
        return showToast('Błędny e-mail lub hasło');
      case LOGIN_STATE.NEEDS_PERSONALIZATION:
        return navigation.navigate(
          INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR,
        );
    }
  };

  const onRegisterButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
  };

  return { onSubmit, onRegisterButtonPress };
};

export default useSignInScreen;
