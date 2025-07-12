import React from 'react';
import { type DimensionValue, StyleSheet, View } from 'react-native';
import { COLORS, ColorValue } from '../../../constants/colors';
import Shimmer from './Shimmer';

interface IProps {
  height?: DimensionValue;
  width?: DimensionValue;
  color?: ColorValue;
}

export default function TextSkeleton({
  height = 14,
  width = '100%',
  color = COLORS.skeletonText,
}: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={{ height, width, backgroundColor: color }} />
      <Shimmer height={height} width={width} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 2,
  },
});
