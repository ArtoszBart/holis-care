import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { appointments } from '../../mocks/appointments';
import { recommendations } from '../../mocks/recommendations';
import { tips } from '../../mocks/tips';
import { MainNavigationProp } from '../../navigation/main';
import { MAIN_ROUTES } from '../../navigation/routes';
import BlurContainer from '../common/BlurContainer';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import TipListItem from '../common/lists/TipListItem';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import ScrollView from '../common/scrollView/ScrollView';
import DashboardHeader from './components/DashboardHeader';
import SummaryList from './components/SummaryList';

export default function DashboardScreen() {
  const navigation = useNavigation<MainNavigationProp>();

  return (
    <PageWrapper style={styles.wrapper} noHeader>
      <DashboardHeader />

      <BlurContainer intensity={30} backgroundColor='#fff5'>
        <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
          <View style={styles.listContainer}>
            <SummaryList
              title='Twoje zalecenia'
              items={recommendations}
              renderItem={({ item }) => (
                <RecommendationListItem recommendation={item} summary />
              )}
              onSeeAllPress={() =>
                navigation.navigate(MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR)
              }
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
      </BlurContainer>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
  listContainer: {
    width: '100%',
  },
});
