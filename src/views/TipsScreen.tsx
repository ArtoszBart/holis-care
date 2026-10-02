import React from 'react';
import { StyleSheet } from 'react-native';
import { type Tip } from '../models/Tip';
import List from './common/lists/List';
import ListItemPlaceholder from './common/lists/ListItemPlaceholder';
import TipListItem from './common/lists/TipListItem/TipListItem';
import PageWrapper from './common/pageWrapper/PageWrapper';
import useTipsScreen from './useTipsScreen';

export default function TipsScreen() {
  const { tips, isRefreshing, fetchTips } = useTipsScreen();

  return (
    <PageWrapper style={styles.wrapper}>
      <List<Tip>
        items={tips}
        ItemComponent={TipListItem}
        isRefreshing={isRefreshing}
        onRefresh={fetchTips}
        placeholder={() => (
          <ListItemPlaceholder
            title='Brak wskazówek na teraz'
            text='Na razie nie mamy dla Ciebie żadnych wskazówek. Wróć tu wkrótce albo po prostu rób dalej to, co działa!'
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
