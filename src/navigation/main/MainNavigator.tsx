import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '../../constants/colors';
import { MAIN_ROUTES } from '../../constants/routes';
import AppointmentsScreen from '../../views/AppointmentsScreen';
import Header from '../../views/common/Header';
import DashboardScreen from '../../views/dashboardScreen/DashboardScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={MAIN_ROUTES.DASHBOARD_SCREEN}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary600,
        tabBarInactiveTintColor: COLORS.typo4,
        animation: 'shift',
        header: ({ options }) => <Header title={options.title} />,
      }}
    >
      <Tab.Screen
        name={MAIN_ROUTES.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          tabBarAccessibilityLabel: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='view-dashboard-outline'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.APPOINTMENTS_SCREEN}
        component={AppointmentsScreen}
        options={{
          title: 'Terminy',
          tabBarAccessibilityLabel: 'Terminy',
          tabBarIcon: ({ color, size }) => (
            <Feather name='calendar' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.RECOMMENDATIONS_SCREEN}
        component={DashboardScreen}
        options={{
          title: 'Zalecane wizyty',
          tabBarAccessibilityLabel: 'Zalecane wizyty',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='plus' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.RESULTS_SCREEN}
        component={DashboardScreen}
        options={{
          title: 'Wyniki',
          tabBarAccessibilityLabel: 'Wyniki',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='document-text-outline' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.ACCOUNT_SCREEN}
        component={DashboardScreen}
        options={{
          title: 'Moje konto',
          tabBarAccessibilityLabel: 'Moje konto',
          tabBarIcon: ({ color, size }) => (
            <Octicons name='person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
