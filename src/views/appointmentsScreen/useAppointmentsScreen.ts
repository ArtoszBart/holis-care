import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAppointmentsRequest } from '../../api/appointment';
import { type Appointment, APPOINTMENT_STATUS } from '../../models/Appointment';
import { type MainNavigationProp } from '../../navigation/main';
import { TabOptions } from './consts';

export interface IAppointmentScreenHook {
  navigation: MainNavigationProp;
  activeTab: TabOptions;
  setActiveTab: (tabOption: TabOptions) => void;
  upcomingAppointments: Appointment[] | undefined;
  pastAppointments: Appointment[] | undefined;
  hasRecommendations: boolean | undefined;
  fetchAppointments: () => Promise<void>;
  isFetching: boolean;
  isRefreshing: boolean;
}

const useAppointmentsScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [hasRecommendations, setHasRecommendations] = useState<boolean>();
  const [pastAppointments, _setPastAppointments] = useState<Appointment[]>();
  const [upcomingAppointments, _setUpcomingAppointments] =
    useState<Appointment[]>();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    if (!isFetching) setIsRefreshing(true);
    const response = await getAppointmentsRequest();
    if (!isFetching) setIsRefreshing(false);
    else setIsFetching(false);

    if (response.ok) {
      setAppointments(response.data);
    }
  };

  const setAppointments = (appointmentsData: Appointment[]): void => {
    const { pastAppointments, upcomingAppointments, recommendations } =
      appointmentsData.reduce(
        (acc, appointment) => {
          if (appointment.status === APPOINTMENT_STATUS.SCHEDULED) {
            acc.pastAppointments.push(appointment);
          } else if (appointment.status === APPOINTMENT_STATUS.COMPLETED) {
            acc.upcomingAppointments.push(appointment);
          } else if (appointment.status === APPOINTMENT_STATUS.TO_PLAN) {
            acc.recommendations.push(appointment);
          }

          return acc;
        },
        {
          pastAppointments: [] as Appointment[],
          upcomingAppointments: [] as Appointment[],
          recommendations: [] as Appointment[],
        },
      );

    _setPastAppointments(pastAppointments);
    _setUpcomingAppointments(upcomingAppointments);
    setHasRecommendations(recommendations.length > 0);
  };

  const hookOptions: IAppointmentScreenHook = {
    navigation,
    activeTab,
    setActiveTab,
    upcomingAppointments,
    pastAppointments,
    hasRecommendations,
    fetchAppointments,
    isFetching,
    isRefreshing,
  };

  return hookOptions;
};

export default useAppointmentsScreen;
