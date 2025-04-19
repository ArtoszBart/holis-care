import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PERSONALIZATION_ROUTES } from '../../constants/routes';
import SexScreen from '../../views/personalization/SexScreen';

const Stack = createNativeStackNavigator();

export default function PersonalizationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_left',
        headerTransparent: true,
        headerShown: false,
      }}
      initialRouteName={PERSONALIZATION_ROUTES.SEX_SCREEN}
    >
      <Stack.Screen
        name={PERSONALIZATION_ROUTES.SEX_SCREEN}
        component={SexScreen}
      />
    </Stack.Navigator>
  );
}
