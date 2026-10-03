/* eslint-disable react-hooks/refs */
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import CustomText from '../common/CustomText';
import Indicator from './components/Indicator';
import OnboardingNavButton from './components/OnboardingNavButton';
import Slide from './components/Slide';
import useOnboardingSwiper from './useOnboardingSwiper';
import { slides } from './utils/content';

export default function OnboardingScreen() {
  const hook = useOnboardingSwiper({ slides });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={hook.onSkipPress}
        style={[styles.skipContainer, { top: hook.insets.top + 20 }]}
      >
        <CustomText style={styles.skipText}>Pomiń</CustomText>
      </TouchableOpacity>

      <Animated.FlatList
        ref={hook.listRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={hook.onScroll}
        onViewableItemsChanged={hook.onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({ item }) => <Slide item={item} />}
      />

      <View style={[styles.nav, { paddingBottom: hook.insets.bottom + 10 }]}>
        <OnboardingNavButton label='Dalej' onPress={hook.onNextPress} />

        <Indicator max={slides.length} scrollRef={hook.scrollX} />

        {hook.index !== 0 && (
          <OnboardingNavButton label='Wstecz' onPress={hook.onPrevPress} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingTop: 10,
    backgroundColor: COLORS.MAIN,
  },
  skipContainer: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
  },
});
