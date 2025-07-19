import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { type Appointment } from '../../models/Appointment';
import { MAIN_ROUTES } from '../../navigation/routes';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import AppointmentListItemSkeleton from '../common/lists/AppointmentListItemSkeleton';
import ListItemPlaceholder from '../common/lists/ListItemPlaceholder';
import TopTabsNavigation from '../common/navigation/TopTabsNavigation';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import { TabOptions, tabOptions } from './consts';
import useAppointmentsScreen from './useAppointmentsScreen';

const skeletons = Array.from({ length: 3 });

export default function AppointmentsScreen() {
  const hook = useAppointmentsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <TopTabsNavigation<TabOptions>
        options={tabOptions}
        activeTab={hook.activeTab}
        setActiveTab={hook.setActiveTab}
        style={styles.tabs}
      />

      {hook.activeTab === TabOptions.UPCOMING && (
        <FlatList
          data={hook.isFetching ? skeletons : hook.upcomingAppointments}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.contentContainer}
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            hook.isFetching ? (
              <AppointmentListItemSkeleton />
            ) : (
              <AppointmentListItem item={item as Appointment} />
            )
          }
          refreshing={hook.isRefreshing}
          onRefresh={hook.fetchAppointments}
          ListEmptyComponent={
            hook.isFetching ? null : hook.hasRecommendations ? (
              <ListItemPlaceholder
                text='Brak zaplanowanych wizyt — sprawdź, które warto umówić'
                onClick={() =>
                  hook.navigation.navigate(
                    MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR,
                  )
                }
                showIcon
              />
            ) : (
              <ListItemPlaceholder
                title='Wszystko ogarnięte!'
                text='Sprawdź wskazówki Holiego, które pomogą Ci dbać o siebie na co dzień'
                onClick={() =>
                  hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
                }
              />
            )
          }
        />
      )}
      {hook.activeTab === TabOptions.PAST && (
        <FlatList
          data={hook.isFetching ? skeletons : hook.pastAppointments}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.contentContainer}
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            hook.isFetching ? (
              <AppointmentListItemSkeleton />
            ) : (
              <AppointmentListItem item={item as Appointment} />
            )
          }
          refreshing={hook.isRefreshing}
          onRefresh={hook.fetchAppointments}
          ListEmptyComponent={
            hook.isFetching ? null : hook.hasRecommendations ? (
              <ListItemPlaceholder
                text='Brak historii wizyt - zobacz, jakie rekomendacje ma Holi'
                onClick={() =>
                  hook.navigation.navigate(
                    MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR,
                  )
                }
                showIcon
              />
            ) : (
              <ListItemPlaceholder
                title='Nie masz jeszcze historii wizyt'
                text='Zajrzyj do wskazówek Holiego — może znajdziesz coś dla siebie'
                onClick={() =>
                  hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
                }
              />
            )
          }
        />
      )}
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 0,
  },
  tabs: {
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 15,
  },
});
