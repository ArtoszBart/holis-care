import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import useApp from './src/config/useApp';
import { MainNavigator } from './src/navigation/main';
import BackgroundWrapper from './src/views/common/BackgroundWrapper';
import Loader from './src/views/common/loader/Loader';

export default function App() {
  const hook = useApp();

  if (hook.isBroken) {
    return null;
  }

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <BackgroundWrapper>
      <Loader />

      <NavigationContainer theme={Theme}>
        {/* <OnboardingNavigator /> */}
        {/* <AuthNavigator /> */}
        {/* <PersonalizationNavigator /> */}
        <MainNavigator />
      </NavigationContainer>
    </BackgroundWrapper>
  );
}
