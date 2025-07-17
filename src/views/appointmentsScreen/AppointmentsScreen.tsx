import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { type Appointment } from '../../models/Appointment';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import TopTabsNavigation from '../common/navigation/TopTabsNavigation';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import { TabOptions, tabOptions } from './consts';
import useAppointmentsScreen from './useAppointmentsScreen';

const renderList = (appointments: Appointment[]) => (
  <FlatList
    data={appointments}
    keyExtractor={(_, index) => index.toString()}
    contentContainerStyle={styles.contentContainer}
    style={styles.listContainer}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => <AppointmentListItem appointment={item} />}
  />
);

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

      {hook.activeTab === TabOptions.UPCOMING &&
        renderList(hook.upcomingAppointments)}
      {hook.activeTab === TabOptions.PAST && renderList(hook.pastAppointments)}
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
