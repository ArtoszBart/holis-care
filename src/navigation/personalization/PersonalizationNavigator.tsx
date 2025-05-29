import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BirthDateScreen from '../../views/personalization/BirthDateScreen';
import LetsStartScreen from '../../views/personalization/getStartedScreen/GetStartedScreen';
import NameScreen from '../../views/personalization/NameScreen';
import SexScreen from '../../views/personalization/SexScreen';
import { PERSONALIZATION_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function PersonalizationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName={PERSONALIZATION_ROUTES.SEX_SCREEN}
    >
      <Stack.Screen
        name={PERSONALIZATION_ROUTES.SEX_SCREEN}
        component={SexScreen}
      />
      <Stack.Screen
        name={PERSONALIZATION_ROUTES.BIRTH_DATE_SCREEN}
        component={BirthDateScreen}
      />
      <Stack.Screen
        name={PERSONALIZATION_ROUTES.NAME_SCREEN}
        component={NameScreen}
      />
      <Stack.Screen
        name={PERSONALIZATION_ROUTES.GET_STARTED_SCREEN}
        component={LetsStartScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
