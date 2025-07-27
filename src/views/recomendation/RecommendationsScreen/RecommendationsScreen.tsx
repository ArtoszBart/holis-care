import React from 'react';
import { StyleSheet } from 'react-native';
import { type Appointment } from '../../../models/Appointment';
import { MAIN_ROUTES } from '../../../navigation/routes';
import List from '../../common/lists/List';
import ListItemPlaceholder from '../../common/lists/ListItemPlaceholder';
import RecommendationListItem from '../../common/lists/RecommendationListItem';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useRecommendationsScreen from './useRecommendationsScreen';

export default function RecommendationsScreen() {
  const { recommendations, fetchRecommendations, isRefreshing, navigation } =
    useRecommendationsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <List<Appointment>
        items={recommendations}
        ItemComponent={RecommendationListItem}
        isRefreshing={isRefreshing}
        onRefresh={fetchRecommendations}
        placeholder={() => (
          <ListItemPlaceholder
            title='Brak nowych zaleceń. Świetna robota!'
            text='Nie musisz nic planować, ale zawsze możesz zrobić coś dla siebie — sprawdź wskazówki Holiego'
            onClick={() => navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)}
          />
        )}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 0,
  },
});
