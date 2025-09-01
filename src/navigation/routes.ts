export enum ROOT_ROUTES {
  INITIAL_FLOW_NAVIGATOR = 'InitialFlowNavigator',
  MAIN_NAVIGATOR = 'MainNavigator',
}

export enum INITIAL_FLOW_ROUTES {
  ONBOARDING_SCREEN = 'OnboardingScreen',
  AUTH_NAVIGATOR = 'AuthNavigator',
  PERSONALIZATION_NAVIGATOR = 'PersonalizationNavigator',
}

export enum AUTH_ROUTES {
  MAIN_SCREEN = 'MainAuthScreen',
  SIGN_UP_SCREEN = 'SignUpScreen',
  SIGN_IN_SCREEN = 'SignInScreen',
  CONFIRMATION_SCREEN = 'ConfirmationScreen',
}

export enum PERSONALIZATION_ROUTES {
  SEX_SCREEN = 'PersonalizationSexScreen',
  BIRTH_DATE_SCREEN = 'PersonalizationBirthDateScreen',
  NAME_SCREEN = 'PersonalizationNameScreen',
  GET_STARTED_SCREEN = 'GetStartedScreen',
}

export enum MAIN_ROUTES {
  DASHBOARD_SCREEN = 'DashboardScreen',
  APPOINTMENTS_SCREEN = 'AppointmentsScreen',
  RECOMMENDATIONS_NAVIGATOR = 'RecommendationsNavigator',
  TIPS_SCREEN = 'TipsScreen',
  ACCOUNT_NAVIGATOR = 'AccountNavigator',
}

export enum RECOMMENDATIONS_ROUTES {
  RECOMMENDATIONS_SCREEN = 'RecommendationsScreen',
  RECOMMENDATION_INFO_SCREEN = 'RecommendationInfoScreen',
  RECOMMENDATION_FORM_SCREEN = 'RecommendationFormScreen',
  RECOMMENDATION_SUCCESS_SCREEN = 'RecommendationSuccessScreen',
}

export enum ACCOUNT_ROUTES {
  ACCOUNT_SCREEN = 'AccountScreen',
  ACCOUNT_SETTINGS_SCREEN = 'AccountSettingsScreen',
}
