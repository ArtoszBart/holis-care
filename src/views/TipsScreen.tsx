import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { type Tip } from '../models/Tip';
import TipListItem from './common/lists/TipListItem';
import TipListItemSkeleton from './common/lists/TipListItemSkeleton';
import PageWrapper from './common/pageWrapper/PageWrapper';
import useTipsScreen from './useTipsScreen';

export default function TipsScreen() {
  const { tips, fetchTips, isFetching, isRefreshing } = useTipsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <FlatList
        data={isFetching ? Array.from({ length: 3 }) : tips}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          isFetching ? (
            <TipListItemSkeleton />
          ) : (
            <TipListItem item={item as Tip} />
          )
        }
        refreshing={isRefreshing}
        onRefresh={fetchTips}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 0,
  },
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingVertical: 15,
  },
});
