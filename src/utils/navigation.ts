import { type BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CommonActions,
  type EventArg,
  type ParamListBase,
} from '@react-navigation/native';

export const navigateTabWithReset = (
  e: EventArg<'tabPress', true>,
  navigation: BottomTabNavigationProp<ParamListBase>,
  targetRoute: string,
) => {
  e.preventDefault();

  const tabName = e.target?.split('-')[0];
  const thisTab = navigation.getState().routes.find((r) => r.name === tabName);
  const shouldBeReset = thisTab?.state?.index !== 0;

  if (shouldBeReset) {
    navigation.dispatch((state) =>
      CommonActions.reset({
        ...state,
        routes: state.routes.map((r) =>
          r.name === tabName ? { ...r, state: { index: 0, routes: [] } } : r,
        ),
      }),
    );
  }

  navigation.navigate(targetRoute);
};
