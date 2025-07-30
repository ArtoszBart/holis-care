import * as Sentry from '@sentry/react-native';

export const SENTRY_CONFIG =
  process.env.EXPO_PUBLIC_SENTRY_ENABLE === 'true'
    ? {
        dsn: process.env.EXPO_PUBLIC_SENTRY_AUTH_TOKEN,
        sendDefaultPii: true,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1,
        integrations: [Sentry.mobileReplayIntegration()],
      }
    : {};
