import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../../views/common/Header';
import RecommendationsScreen from '../../views/RecommendationsScreen';
import { RECOMMENDATIONS_ROUTES } from '../routes';

const Stack = createNativeStackNavigator();

export default function RecommendationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
      initialRouteName={RECOMMENDATIONS_ROUTES.RECOMMENDATIONS_SCREEN}
    >
      <Stack.Screen
        name={RECOMMENDATIONS_ROUTES.RECOMMENDATIONS_SCREEN}
        component={RecommendationsScreen}
        options={{
          title: 'Twoje zalecenia',
          header: ({ options }) => <Header title={options.title} />,
        }}
      />
    </Stack.Navigator>
  );
}
