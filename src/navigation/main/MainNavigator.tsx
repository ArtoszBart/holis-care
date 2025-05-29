import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';
import AppointmentsScreen from '../../views/appointmentsScreen/AppointmentsScreen';
import Header from '../../views/common/Header';
import { ICONS } from '../../views/common/icon';
import BottomTabsButton from '../../views/common/navigation/BottomTabsButton';
import BottomTabsMainButton from '../../views/common/navigation/BottomTabsMainButton';
import DashboardScreen from '../../views/dashboardScreen/DashboardScreen';
import TipsScreen from '../../views/TipsScreen';
import { AccountNavigator } from '../account';
import { RecommendationNavigator } from '../recommendation';
import { MAIN_ROUTES } from '../routes';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  const insets = useSafeAreaInsets();
  const insetsBottom = insets.bottom;

  return (
    <Tab.Navigator
      initialRouteName={MAIN_ROUTES.DASHBOARD_SCREEN}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        popToTopOnBlur: true,
        animation: 'shift',
        header: ({ options }) => <Header title={options.title} />,
        headerTransparent: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary600,
        tabBarInactiveTintColor: COLORS.typo4,
        tabBarStyle: { ...styles.tabBar, height: 65 + insetsBottom },
      }}
    >
      <Tab.Screen
        name={MAIN_ROUTES.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarAccessibilityLabel: 'Panel',
          headerShown: false,
          tabBarIcon: (props) => (
            <BottomTabsButton icon={ICONS.DASHBOARD} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.APPOINTMENTS_SCREEN}
        component={AppointmentsScreen}
        options={{
          title: 'Terminy',
          tabBarAccessibilityLabel: 'Terminy',
          tabBarIcon: (props) => (
            <BottomTabsButton icon={ICONS.CALENDAR} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR}
        component={RecommendationNavigator}
        options={{
          title: 'Twoje zalecenia',
          tabBarAccessibilityLabel: 'Zalecenia',
          headerShown: false,
          tabBarIcon: (props) => (
            <BottomTabsMainButton icon={ICONS.PLUS} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={MAIN_ROUTES.TIPS_SCREEN}
        component={TipsScreen}
        options={{
          title: '💡 Porady Holiego 🌿',
          tabBarAccessibilityLabel: 'Porady',
          tabBarIcon: (props) => (
            <BottomTabsButton icon={ICONS.BULB} {...props} />
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
          tabBarIcon: (props) => (
            <BottomTabsButton icon={ICONS.PERSON} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0,
    borderColor: '#f3f3f3',

    paddingTop: 12,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
  },
});
