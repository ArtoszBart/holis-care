import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const skeletons = Array.from({ length: 3 });

interface IProps<T> {
  items: T[] | undefined;
  ItemComponent: React.ComponentType<{ item: T }>;
  Skeleton: React.ComponentType;
  placeholder: () => React.ReactElement;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: VoidFunction;
}

export default function List<T>({
  isLoading,
  Skeleton,
  ItemComponent,
  items,
  placeholder,
  isRefreshing,
  onRefresh,
}: IProps<T>) {
  return (
    <FlatList
      data={isLoading ? skeletons : items}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) =>
        isLoading ? <Skeleton /> : <ItemComponent item={item as T} />
      }
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
