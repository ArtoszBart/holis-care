import { StackActions, useNavigation } from '@react-navigation/native';
import { signUpRequest } from '../../../api/auth';
import { RegisterDTO } from '../../../models/Auth';
import { type InitialFlowNavigationProp } from '../../../navigation/initialFlow';
import { AUTH_ROUTES, INITIAL_FLOW_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../common/loader/loaderStore';
import { showToast } from '../../common/toast/toastHelper';

const useSignUpScreen = () => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (registerData: RegisterDTO): Promise<void> => {
    setIsLoading(true);
    const response = await signUpRequest(registerData);
    setIsLoading(false);

    if (response.ok) {
      navigation.navigate(INITIAL_FLOW_ROUTES.PERSONALIZATION_NAVIGATOR);
    } else {
      showToast('Formularz zawiera błędy');
    }
  };

  const onLoginButtonPress = (): void => {
    navigation.dispatch(StackActions.replace(AUTH_ROUTES.SIGN_UP_SCREEN));
  };

  return { onSubmit, onLoginButtonPress };
};

export default useSignUpScreen;
