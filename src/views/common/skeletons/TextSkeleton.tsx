import React from 'react';
import {
  type DimensionValue,
  StyleSheet,
  View,
  type ViewStyle,
} from 'react-native';
import { COLORS } from '../../../constants/colors';
import Shimmer from './Shimmer';

interface IProps {
  height?: DimensionValue;
  width?: DimensionValue;
  color?: COLORS;
  style?: ViewStyle;
}

export default function TextSkeleton({
  height = 14,
  width = '100%',
  color = COLORS.SKELETON_TEXT,
  style,
}: IProps) {
  return (
    <View style={[styles.wrapper, style]}>
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
