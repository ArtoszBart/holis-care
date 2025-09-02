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
  fetchAppointments: () => Promise<void>;
  isRefreshing: boolean;
  isInitLoaded: boolean;
}

const useAppointmentsScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { getRefreshedAppointments } = useAppointmentStore();

  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitLoaded, setIsInitLoaded] = useState(false);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
  const [upcAppointments, setUpcAppointments] = useState<Appointment[]>([]);
  const [hasRecommendations, setHasRecommendations] = useState(false);

  useEffect(() => {
    const initDataLoad = async () => {
      await fetchAppointments();
      setIsInitLoaded(true);
    };

    initDataLoad();
  }, []);

  const fetchAppointments = async () => {
    if (isInitLoaded) setIsRefreshing(true);
    const appointments = await getRefreshedAppointments();

    const { pastAppointments, upcomingAppointments, hasRecommendations } =
      appointments.reduce(
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
    setPastAppointments(pastAppointments);
    setUpcAppointments(upcomingAppointments);
    setHasRecommendations(hasRecommendations);

    setIsRefreshing(false);
  };

  const hookOptions: IAppointmentScreenHook = {
    navigation,
    activeTab,
    setActiveTab,
    upcAppointments,
    pastAppointments,
    hasRecommendations,
    fetchAppointments,
    isRefreshing,
    isInitLoaded,
  };

  return hookOptions;
};

export default useAppointmentsScreen;
