import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SKELETONS_COUNT } from '../skeletons/consts/skeletonsCount';

const skeletons = Array.from({ length: SKELETONS_COUNT });

interface IProps<T> {
  items: T[] | undefined;
  ItemComponent: React.ComponentType<{ item: T }>;
  Skeleton?: React.ComponentType;
  placeholder: () => React.ReactElement;
  isInitFetching?: boolean;
  isRefreshing: boolean;
  onRefresh: VoidFunction;
}

export default function List<T>({
  ItemComponent,
  Skeleton,
  items,
  placeholder,
  isInitFetching,
  isRefreshing,
  onRefresh,
}: IProps<T>) {
  return (
    <FlatList
      data={isInitFetching ? skeletons : items}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) =>
        isInitFetching && Skeleton ? (
          <Skeleton />
        ) : (
          <ItemComponent item={item as T} />
        )
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
