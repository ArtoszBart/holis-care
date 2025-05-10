import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ONBOARDING_ROUTES } from '../routes';

type OnboardingRouteName =
  (typeof ONBOARDING_ROUTES)[keyof typeof ONBOARDING_ROUTES];

export type OnboardingNavigationProp = NativeStackNavigationProp<{
  [key in OnboardingRouteName]: undefined;
}>;
