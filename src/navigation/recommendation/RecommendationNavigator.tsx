import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../../views/common/Header';
import RecommendationInfoScreen from '../../views/recomendation/RecommendationInfoScreen';
import RecommendationsScreen from '../../views/recomendation/RecommendationsScreen';
import { RECOMMENDATIONS_ROUTES } from '../routes';
import { RecommendationNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<RecommendationNavigatorParamList>();

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
      <Stack.Screen
        name={RECOMMENDATIONS_ROUTES.RECOMMENDATION_INFO_SCREEN}
        component={RecommendationInfoScreen}
        options={{
          title: 'Informacje o zaleceniu',
          header: ({ options }) => <Header title={options.title} withBack />,
        }}
      />
    </Stack.Navigator>
  );
}
