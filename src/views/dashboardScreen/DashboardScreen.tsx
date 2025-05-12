import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { appointments } from '../../mocks/appointments';
import { recommendations } from '../../mocks/recommendations';
import { tips } from '../../mocks/tips';
import { MainNavigationProp } from '../../navigation/main';
import { MAIN_ROUTES } from '../../navigation/routes';
import PageWrapper from '../common/PageWrapper';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import TipListItem from '../common/lists/TipListItem';
import DashboardHeader from './components/DashboardHeader';
import SummaryList from './components/SummaryList';

export default function DashboardScreen() {
  const navigation = useNavigation<MainNavigationProp>();

  return (
    <PageWrapper noHeader style={{ paddingHorizontal: 0, paddingBottom: 0 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        <DashboardHeader />

        <View style={styles.listContainer}>
          <SummaryList
            title='Twoje zalecenia'
            items={recommendations}
            renderItem={({ item }) => (
              <RecommendationListItem recommendation={item} />
            )}
            onSeeAllPress={() => {}}
          />
        </View>
        <View style={styles.listContainer}>
          <SummaryList
            title='Wskazówki zdrowotne'
            items={tips.filter((tip) => tip.userLiked)}
            renderItem={({ item }) => <TipListItem tip={item} summary />}
            onSeeAllPress={() => navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)}
          />
        </View>
        <View style={styles.listContainer}>
          <SummaryList
            title='Następna wizyta'
            items={appointments}
            renderItem={({ item }) => (
              <AppointmentListItem appointment={item} summary />
            )}
            onSeeAllPress={() =>
              navigation.navigate(MAIN_ROUTES.APPOINTMENTS_SCREEN)
            }
          />
        </View>
      </ScrollView>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
