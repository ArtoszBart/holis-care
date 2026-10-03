import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

let headerHeight = 0;

const usePageWrapper = () => {
  const insets = useSafeAreaInsets();
  const updatedHeaderHeight = useHeaderHeight();
  const tabBarHeight = useContext(BottomTabBarHeightContext);

  if (updatedHeaderHeight !== 0) {
    // eslint-disable-next-line react-hooks/globals
    headerHeight = updatedHeaderHeight;
  }

  return { headerHeight, insets, tabBarHeight };
};

export default usePageWrapper;
