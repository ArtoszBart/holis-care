import { StackActions, useNavigation } from '@react-navigation/native';
import { login } from '../../../auth/authService';
import { type LoginDTO } from '../../../models/Auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../common/loader/loaderStore';
import { showToast } from '../../common/toast/toastHelper';

const useSignInScreen = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (loginData: LoginDTO): Promise<void> => {
    setIsLoading(true);
    const result = await login(loginData);
    setIsLoading(false);

    if (!result) {
      showToast('Błędny e-mail lub hasło');
    } else {
      navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);
    }
  };

  const onRegisterButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
  };

  return { onSubmit, onRegisterButtonPress };
};

export default useSignInScreen;
