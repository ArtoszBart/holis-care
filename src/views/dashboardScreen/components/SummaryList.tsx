import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';
import LinkButton from '../../common/LinkButton';

const skeletons = Array.from({ length: 2 });

interface ISummaryList<T> {
  title: string;
  isLoading: boolean;
  Skeleton: React.ComponentType<{ summary?: boolean }>;
  ItemComponent: React.ComponentType<{ item: T; summary?: boolean }>;
  items: T[] | undefined;
  placeholder: () => React.ReactElement;
  onSeeAllPress: VoidFunction;
}

export default function SummaryList<T>({
  title,
  isLoading,
  Skeleton,
  ItemComponent,
  items,
  placeholder,
  onSeeAllPress,
}: ISummaryList<T>) {
  return (
    <View>
      <View style={styles.flatListHeader}>
        <CustomText>{title}</CustomText>
        <LinkButton
          label='Zobacz wszystkie'
          onPress={onSeeAllPress}
          textStyle={{ color: COLORS.ACCENT }}
        />
      </View>

      <FlatList
        data={isLoading ? skeletons : items}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={placeholder}
        renderItem={({ item }) =>
          isLoading ? (
            <Skeleton summary />
          ) : (
            <ItemComponent item={item as T} summary />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  contentContainer: {
    flexGrow: 0,
    paddingHorizontal: 15,
    gap: 10,
  },
});
