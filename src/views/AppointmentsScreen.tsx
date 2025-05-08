import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { appointments } from '../mocks/appointments';
import BackgroundWrapper from './common/BackgroundWrapper';
import AppointmentListItem from './common/lists/AppointmentListItem';

export default function AppointmentsScreen() {
  return (
    <BackgroundWrapper>
      <FlatList
        data={appointments}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          gap: 10,
          paddingBottom: 10,
        }}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AppointmentListItem appointment={item} />}
      />
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
