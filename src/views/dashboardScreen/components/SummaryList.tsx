import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../../common/CustomText';
import LinkButton from '../../common/LinkButton';

interface ISummaryList<T> {
  title: string;
  items: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  onSeeAllPress: VoidFunction;
}

export default function SummaryList<T>({
  items,
  title,
  renderItem,
  onSeeAllPress,
}: ISummaryList<T>) {
  return (
    <View>
      <View style={styles.flatListHeader}>
        <CustomText>{title}</CustomText>
        <LinkButton
          label='Zobacz wszystkie'
          onPress={onSeeAllPress}
          textStyle={{ color: COLORS.primary600 }}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={{ flexGrow: 0, paddingHorizontal: 15, gap: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
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
});
