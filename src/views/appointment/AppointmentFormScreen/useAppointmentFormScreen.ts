import { useNavigation } from '@react-navigation/native';
import { signUpAppointmentRequest } from '../../../api/appointment';
import {
  APPOINTMENT_STATUS,
  type AppointmentNavigationParam,
  type SignUpAppointmentDTO,
  type SignUpAppointmentFormValues,
} from '../../../models/Appointment';
import { type RecommendationNavigationProp } from '../../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../../navigation/routes';
import { useAppointmentStore } from '../../../stores/appointmentStore';
import useLoadingStore from '../../../stores/loaderStore';
import { toPayloadISODate } from '../../../utils/dateTime';
import { showToast, TOAST_TYPE } from '../../common/toast';

const useAppointmentFormScreen = (appointment: AppointmentNavigationParam) => {
  const navigation = useNavigation<RecommendationNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { updateAppointment } = useAppointmentStore();

  const onSubmit = async (data: SignUpAppointmentFormValues) => {
    setIsLoading(true);

    const { date, time, ...rest } = data;
    const payload: SignUpAppointmentDTO = {
      ...rest,
      appointmentDate: toPayloadISODate(date, time),
      status: APPOINTMENT_STATUS.SCHEDULED,
    };

    const response = await signUpAppointmentRequest(appointment.id, payload);
    setIsLoading(false);

    if (!response.ok) return;

    updateAppointment(response.data);

    if (appointment.status === APPOINTMENT_STATUS.TO_PLAN)
      return navigation.navigate(
        RECOMMENDATIONS_ROUTES.RECOMMENDATION_SUCCESS_SCREEN,
      );

    showToast('Zapisano zmiany', TOAST_TYPE.SUCCESS);
    navigation.pop();
  };

  return { onSubmit };
};

export default useAppointmentFormScreen;
