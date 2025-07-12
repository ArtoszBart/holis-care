import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, type DimensionValue, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import useShimmer from './useShimmer';

const gradientWidth = 200;

interface IProps {
  height: DimensionValue;
  width: DimensionValue;
}

export default function Shimmer({ height, width }: IProps) {
  const { setWidth, animationRef } = useShimmer({ gradientWidth });

  return (
    <View onLayout={setWidth} style={[styles.container, { height, width }]}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: animationRef }],
        }}
      >
        <LinearGradient
          colors={[
            COLORS.skeletonShimmer1,
            COLORS.skeletonShimmer2,
            COLORS.skeletonShimmer1,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFill, styles.gradient]}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    width: gradientWidth,
    height: '100%',
  },
});
