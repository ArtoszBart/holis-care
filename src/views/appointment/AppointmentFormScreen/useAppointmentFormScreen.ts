import { useNavigation } from '@react-navigation/native';
import { demoAppointments } from '../../../mocks/appointments';
import {
  APPOINTMENT_STATUS,
  type AppointmentNavigationParam,
  type SignUpAppointmentFormValues,
} from '../../../models/Appointment';
import { type RecommendationNavigationProp } from '../../../navigation/recommendation';
import { RECOMMENDATIONS_ROUTES } from '../../../navigation/routes';
import { useAppointmentStore } from '../../../stores/appointmentStore';
import useLoadingStore from '../../../stores/loaderStore';
import { showToast, TOAST_TYPE } from '../../common/toast';

const useAppointmentFormScreen = (appointment: AppointmentNavigationParam) => {
  const navigation = useNavigation<RecommendationNavigationProp>();
  const { setIsLoading } = useLoadingStore();
  const { updateAppointment } = useAppointmentStore();

  const onSubmit = async (data: SignUpAppointmentFormValues) => {
    setIsLoading(true);

    const demoAppointment = demoAppointments.find(
      (demoAppointment) => demoAppointment.id === appointment.id,
    );
    if (!demoAppointment) return showToast();
    demoAppointment.status = APPOINTMENT_STATUS.SCHEDULED;
    demoAppointment.text = data.text ?? null;
    demoAppointment.doctorName = data.doctorName ?? null;
    demoAppointment.locationString = data.locationString ?? null;
    demoAppointment.appointmentDate = new Date(data.date);

    setIsLoading(false);

    updateAppointment(demoAppointment);

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
