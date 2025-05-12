import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from '../../constants/colors';
import AppointmentsScreen from '../../views/appointmentsScreen/AppointmentsScreen';
import Header from '../../views/common/Header';
import { Icon, ICONS } from '../../views/common/icon';
import DashboardScreen from '../../views/dashboardScreen/DashboardScreen';
import TipsScreen from '../../views/TipsScreen';
import { AccountNavigator } from '../account';
import { MAIN_ROUTES } from '../routes';

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
          tabBarAccessibilityLabel: 'Panel',
          headerShown: false,
          tabBarIcon: ({ color, size: fontSize }) => (
            <Icon icon={ICONS.DASHBOARD} style={{ fontSize, color }} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.APPOINTMENTS_SCREEN}
        component={AppointmentsScreen}
        options={{
          title: 'Terminy',
          tabBarAccessibilityLabel: 'Terminy',
          tabBarIcon: ({ color, size: fontSize }) => (
            <Icon icon={ICONS.CALENDAR} style={{ fontSize, color }} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.RECOMMENDATIONS_SCREEN}
        component={DashboardScreen}
        options={{
          title: 'Zalecane wizyty',
          tabBarAccessibilityLabel: 'Zalecane wizyty',
          tabBarIcon: ({ color, size: fontSize }) => (
            <Icon icon={ICONS.PLUS} style={{ fontSize, color }} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.TIPS_SCREEN}
        component={TipsScreen}
        options={{
          title: '💡 Porady Holiego 🌿',
          tabBarAccessibilityLabel: 'Porady',
          tabBarIcon: ({ color, size: fontSize }) => (
            <Icon icon={ICONS.BULB} style={{ fontSize, color }} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
        options={{
          title: 'Moje konto',
          tabBarAccessibilityLabel: 'Moje konto',
          headerShown: false,
          tabBarIcon: ({ color, size: fontSize }) => (
            <Icon icon={ICONS.PERSON} style={{ fontSize, color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
