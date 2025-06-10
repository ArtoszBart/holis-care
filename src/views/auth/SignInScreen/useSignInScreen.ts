import { StackActions, useNavigation } from '@react-navigation/native';
import { signInRequest } from '../../../api/auth';
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
    const response = await signInRequest(loginData);
    setIsLoading(false);

    if (response.ok) {
      navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);
    } else {
      showToast('Błędny e-mail lub hasło');
    }
  };

  const onRegisterButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
  };

  return { onSubmit, onRegisterButtonPress };
};

export default useSignInScreen;
