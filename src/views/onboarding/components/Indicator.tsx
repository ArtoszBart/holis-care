import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';

const { width } = Dimensions.get('window');

interface IProps {
  max: number;
  scrollRef: Animated.Value;
}

export default function Indicator({ max, scrollRef }: IProps) {
  return (
    <View style={styles.dotsRow}>
      {Array.from({ length: max }).map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollRef.interpolate({
          inputRange,
          outputRange: [10, 24, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollRef.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsRow: {
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '50%' }],
  },
  dot: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.ACCENT,
  },
});
