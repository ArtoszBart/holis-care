import React from 'react';
import { StyleSheet } from 'react-native';
import { type Tip } from '../models/Tip';
import { useTipStore } from '../stores/tipStore';
import List from './common/lists/List';
import TipListItem from './common/lists/TipListItem/TipListItem';
import PageWrapper from './common/pageWrapper/PageWrapper';

export default function TipsScreen() {
  const { fetchTips, isRefreshing, tips } = useTipStore();

  return (
    <PageWrapper style={styles.wrapper}>
      <List<Tip>
        items={tips}
        ItemComponent={TipListItem}
        isRefreshing={isRefreshing}
        onRefresh={fetchTips}
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
