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
  const { storedAppointments, fetchAppointments } = useAppointmentStore();

  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isInitLoaded, setIsInitLoaded] = useState(false);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
  const [upcAppointments, setUpcAppointments] = useState<Appointment[]>([]);
  const [hasRecommendations, setHasRecommendations] = useState(false);

  useEffect(() => {
    const initDataLoad = async () => {
      await fetchData();
      setIsInitLoaded(true);
    };

    initDataLoad();
  }, []);

  useEffect(() => {
    prepareData();
  }, [storedAppointments]);

  const fetchData = async () => {
    if (isInitLoaded) setIsRefreshing(true);
    await fetchAppointments();

    prepareData();

    setIsRefreshing(false);
  };

  const prepareData = () => {
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

  const hookOptions: IAppointmentScreenHook = {
    navigation,
    activeTab,
    setActiveTab,
    upcAppointments,
    pastAppointments,
    hasRecommendations,
    fetchAppointments: fetchData,
    isRefreshing,
    isInitLoaded,
  };

  return hookOptions;
};

export default useAppointmentsScreen;
