import { useNavigation } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { Animated, FlatList, ViewToken } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppStorage, { STORAGE_KEYS } from '../../lib/storage';
import { type InitialFlowNavigationProp } from '../../navigation/initialFlow';
import { INITIAL_FLOW_ROUTES } from '../../navigation/routes';
import { type SlideItem } from './utils/types';

const useOnboardingSwiper = ({ slides }: { slides: SlideItem[] }) => {
  const navigation = useNavigation<InitialFlowNavigationProp>();
  const insets = useSafeAreaInsets();

  const [index, setIndex] = useState(0);

  const listRef = useRef<FlatList<SlideItem>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index != null) {
        setIndex(viewableItems[0].index);
      }
    },
    [],
  );

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
    },
  );

  const onNextPress = async () => {
    if (index < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      onSkipPress();
    }
  };

  const onPrevPress = () => {
    if (index > 0) {
      listRef.current?.scrollToIndex({ index: index - 1, animated: true });
    }
  };

  const onSkipPress = async () => {
    AppStorage.set(STORAGE_KEYS.ONBOARDING_COMPLETED, true);
    navigation.navigate(INITIAL_FLOW_ROUTES.AUTH_NAVIGATOR);
  };

  return {
    listRef,
    scrollX,
    onViewableItemsChanged,
    onSkipPress,
    insets,
    onPrevPress,
    onNextPress,
    index,
    onScroll,
  };
};

export default useOnboardingSwiper;
