import React from 'react';
import { StyleSheet } from 'react-native';
import { type Appointment } from '../../../models/Appointment';
import List from '../../common/lists/List';
import RecommendationListItem from '../../common/lists/RecommendationListItem';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useRecommendationsScreen from './useRecommendationsScreen';

export default function RecommendationsScreen() {
  const { recommendations, fetchRecommendations, isRefreshing } =
    useRecommendationsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <List<Appointment>
        items={recommendations}
        ItemComponent={RecommendationListItem}
        isRefreshing={isRefreshing}
        onRefresh={fetchRecommendations}
        placeholder={() => <></>}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 0,
  },
});
