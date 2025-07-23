import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

interface IProps<T> {
  items: T[] | undefined;
  ItemComponent: React.ComponentType<{ item: T }>;
  placeholder: () => React.ReactElement;
  isRefreshing: boolean;
  onRefresh: VoidFunction;
}

export default function List<T>({
  ItemComponent,
  items,
  placeholder,
  isRefreshing,
  onRefresh,
}: IProps<T>) {
  return (
    <FlatList
      data={items}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ItemComponent item={item} />}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    gap: 10,
    paddingVertical: 15,
  },
});
