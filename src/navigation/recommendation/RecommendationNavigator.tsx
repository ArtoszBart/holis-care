import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentFormScreen from '../../views/appointment/AppointmentFormScreen';
import Header from '../../views/common/Header';
import RecommendationInfoScreen from '../../views/recomendation/RecommendationInfoScreen';
import RecommendationsScreen from '../../views/recomendation/RecommendationsScreen/RecommendationsScreen';
import RecommendationSuccessScreen from '../../views/recomendation/RecommendationSuccessScreen';
import { RECOMMENDATIONS_ROUTES } from '../routes';
import { RecommendationNavigatorParamList } from './types';

const Stack = createNativeStackNavigator<RecommendationNavigatorParamList>();

export default function RecommendationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerTransparent: true,
      }}
      initialRouteName={RECOMMENDATIONS_ROUTES.RECOMMENDATIONS_SCREEN}
    >
      <Stack.Screen
        name={RECOMMENDATIONS_ROUTES.RECOMMENDATIONS_SCREEN}
        component={RecommendationsScreen}
        options={{
          title: 'Twoje zalecenia',
          gestureEnabled: false,
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
      <Stack.Screen
        name={RECOMMENDATIONS_ROUTES.RECOMMENDATION_FORM_SCREEN}
        component={AppointmentFormScreen}
        options={{
          title: 'Nowa wizyta',
          header: ({ options }) => <Header title={options.title} withBack />,
        }}
      />
      <Stack.Screen
        name={RECOMMENDATIONS_ROUTES.RECOMMENDATION_SUCCESS_SCREEN}
        component={RecommendationSuccessScreen}
        options={{
          title: '',
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
