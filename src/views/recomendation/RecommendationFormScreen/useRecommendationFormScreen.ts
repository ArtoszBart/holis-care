import { useNavigation } from '@react-navigation/native';
import { signUpAppointmentRequest } from '../../../api/appointment';
import {
  APPOINTMENT_STATUS,
  type SignUpAppointmentDTO,
  type SignUpAppointmentFormValues,
} from '../../../models/Appointment';
import { type RecommendationNavigationProp } from '../../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../../navigation/routes';
import useLoadingStore from '../../../stores/loaderStore';
import { toPayloadISODate } from '../../../utils/dateTime';
import { showToast } from '../../common/toast';

const useRecommendationFormScreen = (recommendationId: string) => {
  const navigation = useNavigation<RecommendationNavigationProp>();
  const { setIsLoading } = useLoadingStore();

  const onSubmit = async (data: SignUpAppointmentFormValues) => {
    const { date, time, ...rest } = data;

    const payload: SignUpAppointmentDTO = {
      ...rest,
      appointmentDate: toPayloadISODate(date, time),
      status: APPOINTMENT_STATUS.SCHEDULED,
    };

    const response = await signUpAppointmentRequest(recommendationId, payload);
    setIsLoading(false);

    if (!response.ok) return showToast('Wystąpił nieoczekiwany błąd');

    navigation.navigate(RECOMMENDATIONS_ROUTES.RECOMMENDATION_SUCCESS_SCREEN);
  };

  return { onSubmit };
};

export default useRecommendationFormScreen;
