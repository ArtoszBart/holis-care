import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

export const ICONS = {
  ARROW_LEFT: {
    provider: AntDesign,
    name: 'arrow-left',
  },
  BELL: {
    provider: Feather,
    name: 'bell',
  },
  BELL_FILL: {
    provider: Octicons,
    name: 'bell-fill',
  },
  BULB: {
    provider: MaterialIcons,
    name: 'lightbulb-outline',
  },
  CALENDAR: {
    provider: Feather,
    name: 'calendar',
  },
  CHECK: {
    provider: MaterialIcons,
    name: 'check',
  },
  CIRCLE: {
    provider: MaterialCommunityIcons,
    name: 'record-circle',
  },
  CHEVRON_RIGHT: {
    provider: MaterialCommunityIcons,
    name: 'chevron-right',
  },
  DASHBOARD: {
    provider: MaterialCommunityIcons,
    name: 'view-dashboard-outline',
  },
  ERROR: {
    provider: MaterialIcons,
    name: 'error-outline',
  },
  EXTERNAL_LINK: {
    provider: Feather,
    name: 'external-link',
  },
  EYE: {
    provider: Feather,
    name: 'eye-off',
  },
  HEART: {
    provider: FontAwesome,
    name: 'heart',
  },
  HEART_OUTLINE: {
    provider: FontAwesome,
    name: 'heart-o',
  },
  PERSON: {
    provider: Octicons,
    name: 'person',
  },
  PLUS: {
    provider: AntDesign,
    name: 'plus',
  },
  SIGN_OUT: {
    provider: Feather,
    name: 'log-out',
  },
  WARN: {
    provider: AntDesign,
    name: 'warning',
  },
} as const;
