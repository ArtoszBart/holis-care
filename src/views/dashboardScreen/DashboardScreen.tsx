import { usePreventRemove } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { appointments } from '../../mocks/appointments';
import { recommendations } from '../../mocks/recommendations';
import { type Tip } from '../../models/Tip';
import { MAIN_ROUTES } from '../../navigation/routes';
import BlurContainer from '../common/BlurContainer';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import TipListItem from '../common/lists/TipListItem';
import TipListItemSkeleton from '../common/lists/TipListItemSkeleton';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import ScrollView from '../common/scrollView/ScrollView';
import DashboardHeader from './components/DashboardHeader';
import SummaryList from './components/SummaryList';
import useDashboardScreen from './useDashboardScreen';

export default function DashboardScreen() {
  usePreventRemove(true, () => {});
  const { isFetching, tips, navigation } = useDashboardScreen();

  return (
    <PageWrapper style={styles.wrapper} noHeader>
      <DashboardHeader />

      <BlurContainer intensity={30} backgroundColor={COLORS.MAIN_OPACITY_3}>
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
              items={isFetching ? Array.from({ length: 2 }) : tips}
              renderItem={({ item }) =>
                isFetching ? (
                  <TipListItemSkeleton summary />
                ) : (
                  <TipListItem tip={item as Tip} summary />
                )
              }
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
