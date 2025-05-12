import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { tips } from '../mocks/tips';
import TipListItem from './common/lists/TipListItem';
import PageWrapper from './common/PageWrapper';

export default function TipsScreen() {
  return (
    <PageWrapper>
      <FlatList
        data={tips}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TipListItem tip={item} />}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
