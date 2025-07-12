import { useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';

const useShimmer = ({ gradientWidth }: { gradientWidth: number }) => {
  const animationRef = useRef(new Animated.Value(-gradientWidth - 100)).current;
  const [componentWidth, setComponentWidth] = useState(0);

  const setWidth = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setComponentWidth(width);
  };

  useEffect(() => {
    if (componentWidth === 0) return;
    Animated.loop(
      Animated.timing(animationRef, {
        toValue: componentWidth,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  }, [animationRef, componentWidth]);

  return { setWidth, animationRef };
};

export default useShimmer;
