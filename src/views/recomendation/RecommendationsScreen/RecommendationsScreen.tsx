import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { type Appointment } from '../../../models/Appointment';
import RecommendationListItem from '../../common/lists/RecommendationListItem';
import RecommendationListItemSkeleton from '../../common/lists/RecommendationListItemSkeleton';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useRecommendationsScreen from './useRecommendationsScreen';

export default function RecommendationsScreen() {
  const { recommendations, fetchRecommendations, isFetching, isRefreshing } =
    useRecommendationsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <FlatList
        data={isFetching ? Array.from({ length: 3 }) : recommendations}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          isFetching ? (
            <RecommendationListItemSkeleton />
          ) : (
            <RecommendationListItem recommendation={item as Appointment} />
          )
        }
        refreshing={isRefreshing}
        onRefresh={fetchRecommendations}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
  },
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 15,
  },
});
