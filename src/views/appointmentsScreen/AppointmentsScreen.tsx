import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Appointment } from '../../models/Appointment';
import PageWrapper from '../common/PageWrapper';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import TopTabsNavigation from '../common/navigation/TopTabsNavigation';
import {
  pastAppointments,
  TabOptions,
  tabOptions,
  upcomingAppointments,
} from './consts';

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
  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);

  return (
    <PageWrapper style={styles.wrapper}>
      <TopTabsNavigation<TabOptions>
        options={tabOptions}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === TabOptions.UPCOMING && renderList(upcomingAppointments)}
      {activeTab === TabOptions.PAST && renderList(pastAppointments)}
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingBottom: 0,
  },
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 15,
  },
});
