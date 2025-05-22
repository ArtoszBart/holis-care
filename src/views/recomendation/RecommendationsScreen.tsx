import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { recommendations } from '../../mocks/recommendations';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import PageWrapper from '../common/PageWrapper';

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
    marginTop: 0,
    marginBottom: 0,
  },
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
