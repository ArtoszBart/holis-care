import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { BackHandler, Dimensions, StyleSheet } from 'react-native';
import useLoadingStore from '../../../stores/loaderStore';
import BlurContainer from '../BlurContainer';

const loaderSize = Dimensions.get('window').width * 0.4;

export default function Loader() {
  const animation = useRef<LottieView>(null);

  const { isLoading } = useLoadingStore();

  useEffect(() => {
    if (!isLoading) return;

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    return () => subscription.remove();
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <BlurContainer intensity={10} style={styles.blurContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.loader}
        source={require('../../../assets/animations/loader.json')}
        speed={0.8}
      />
    </BlurContainer>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: loaderSize,
    height: loaderSize,
  },
});
