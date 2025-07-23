import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { getAppointmentsRequest } from '../../api/appointment';
import { APPOINTMENT_STATUS, type Appointment } from '../../models/Appointment';
import { type MainNavigationProp } from '../../navigation/main';
import { useAppointmentStore } from '../../stores/appointmentStore';
import { TabOptions } from './consts';

export interface IAppointmentScreenHook {
  navigation: MainNavigationProp;
  activeTab: TabOptions;
  setActiveTab: (tabOption: TabOptions) => void;
  upcomingAppointments: Appointment[] | undefined;
  pastAppointments: Appointment[] | undefined;
  hasRecommendations: boolean | undefined;
  fetchAppointments: () => Promise<void>;
  isRefreshing: boolean;
}

const useAppointmentsScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { storedAppointments, setAppointments } = useAppointmentStore();

  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { pastAppointments, upcomingAppointments, hasRecommendations } =
    storedAppointments.reduce(
      (acc, appointment) => {
        if (appointment.status === APPOINTMENT_STATUS.COMPLETED) {
          acc.pastAppointments.push(appointment);
        } else if (appointment.status === APPOINTMENT_STATUS.SCHEDULED) {
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

  const fetchAppointments = async () => {
    setIsRefreshing(true);
    const response = await getAppointmentsRequest();
    setIsRefreshing(false);

    if (!response.ok) {
      return;
    }

    setAppointments(response.data);
  };

  const hookOptions: IAppointmentScreenHook = {
    navigation,
    activeTab,
    setActiveTab,
    upcomingAppointments,
    pastAppointments,
    hasRecommendations,
    fetchAppointments,
    isRefreshing,
  };

  return hookOptions;
};

export default useAppointmentsScreen;
