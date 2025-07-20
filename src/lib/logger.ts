import * as Sentry from '@sentry/react-native';

export const logError = (content: unknown) => {
  Sentry.captureException(content);
};
