import React from 'react';
import { StyleSheet } from 'react-native';
import TopTabsNavigation from '../common/navigation/TopTabsNavigation';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import AppointmentsList from './components/AppointmentsList';
import { TabOptions, tabOptions } from './consts';
import useAppointmentsScreen from './useAppointmentsScreen';

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
        <AppointmentsList
          items={hook.upcomingAppointments}
          recommendationAvailableText='Brak zaplanowanych wizyt — sprawdź, które warto umówić'
          noRecommendationTitle='Wszystko ogarnięte!'
          noRecommendationText='Sprawdź wskazówki Holiego, które pomogą Ci dbać o siebie na co dzień'
          hook={hook}
        />
      )}
      {hook.activeTab === TabOptions.PAST && (
        <AppointmentsList
          items={hook.pastAppointments}
          recommendationAvailableText='Brak historii wizyt - zobacz, jakie rekomendacje ma Holi'
          noRecommendationTitle='Nie masz jeszcze historii wizyt'
          noRecommendationText='Zajrzyj do wskazówek Holiego — może znajdziesz coś dla siebie'
          hook={hook}
        />
      )}
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
  },
  tabs: {
    marginBottom: 15,
  },
});
