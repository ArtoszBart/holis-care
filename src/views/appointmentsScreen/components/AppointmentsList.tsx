import React from 'react';
import { type Appointment } from '../../../models/Appointment';
import { MAIN_ROUTES } from '../../../navigation/routes';
import AppointmentListItem from '../../common/lists/AppointmentListItem';
import List from '../../common/lists/List';
import ListItemPlaceholder from '../../common/lists/ListItemPlaceholder';
import { type IAppointmentScreenHook } from '../useAppointmentsScreen';

interface IProps {
  items: Appointment[] | undefined;
  recommendationAvailableText: string;
  noRecommendationTitle: string;
  noRecommendationText: string;
  hook: IAppointmentScreenHook;
}

export default function AppointmentsList({
  items,
  recommendationAvailableText,
  noRecommendationTitle,
  noRecommendationText,
  hook,
}: IProps) {
  return (
    <List<Appointment>
      items={items}
      ItemComponent={AppointmentListItem}
      isRefreshing={hook.isRefreshing}
      onRefresh={hook.fetchAppointments}
      placeholder={() =>
        hook.hasRecommendations ? (
          <ListItemPlaceholder
            text={recommendationAvailableText}
            onClick={() =>
              hook.navigation.navigate(MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR)
            }
            showIcon
          />
        ) : (
          <ListItemPlaceholder
            title={noRecommendationTitle}
            text={noRecommendationText}
            onClick={() => hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)}
          />
        )
      }
    />
  );
}
