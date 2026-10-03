import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  APPOINTMENT_STATUS,
  type Appointment,
} from '../../../models/Appointment';
import { type MainNavigationProp } from '../../../navigation/main';
import { useAppointmentStore } from '../../../stores/appointmentStore';
import { TabOptions } from '../consts';

export interface IAppointmentScreenHook {
  navigation: MainNavigationProp;
  activeTab: TabOptions;
  setActiveTab: (tabOption: TabOptions) => void;
  upcAppointments: Appointment[] | undefined;
  pastAppointments: Appointment[] | undefined;
  hasRecommendations: boolean | undefined;
}

const useAppointmentsScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { storedAppointments } = useAppointmentStore();

  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
  const [upcAppointments, setUpcAppointments] = useState<Appointment[]>([]);
  const [hasRecommendations, setHasRecommendations] = useState(false);

  const prepareData = () => {
    const today = new Date();
    const { pastAppointments, upcomingAppointments, hasRecommendations } =
      storedAppointments.reduce(
        (acc, appointment) => {
          if (appointment.status === APPOINTMENT_STATUS.TO_PLAN) return acc;

          if (appointment.appointmentDate! < today) {
            acc.pastAppointments.push(appointment);
          } else {
            acc.upcomingAppointments.push(appointment);
          }

          return acc;
        },
        {
          pastAppointments: [] as Appointment[],
          upcomingAppointments: [] as Appointment[],
          hasRecommendations: false,
        },
      );
    setPastAppointments(
      pastAppointments.sort(
        (a, b) => a.appointmentDate!.getTime() - b.appointmentDate!.getTime(),
      ),
    );
    setUpcAppointments(
      upcomingAppointments.sort(
        (a, b) => a.appointmentDate!.getTime() - b.appointmentDate!.getTime(),
      ),
    );
    setHasRecommendations(hasRecommendations);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    prepareData();
  }, [storedAppointments]);

  const hookOptions: IAppointmentScreenHook = {
    navigation,
    activeTab,
    setActiveTab,
    upcAppointments,
    pastAppointments,
    hasRecommendations,
  };

  return hookOptions;
};

export default useAppointmentsScreen;
