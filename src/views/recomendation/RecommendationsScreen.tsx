import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { recommendations } from '../../mocks/recommendations';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import PageWrapper from '../common/pageWrapper/PageWrapper';

export default function RecommendationsScreen() {
  return (
    <PageWrapper style={styles.wrapper}>
      <FlatList
        data={recommendations}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecommendationListItem recommendation={item} />
        )}
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
