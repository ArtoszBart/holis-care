import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Appointment } from '../../models/Appointment';
import PageWrapper from '../common/PageWrapper';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import TabBar from '../common/tabNavigation/TabNavigation';
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
    contentContainerStyle={{ gap: 10, paddingBottom: 10 }}
    style={styles.listContainer}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => <AppointmentListItem appointment={item} />}
  />
);

export default function AppointmentsScreen() {
  const [activeTab, setActiveTab] = useState<TabOptions>(TabOptions.UPCOMING);

  return (
    <PageWrapper>
      <TabBar<TabOptions>
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
  listContainer: {
    width: '100%',
  },
});
