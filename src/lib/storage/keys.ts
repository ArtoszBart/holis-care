export enum STORAGE_KEYS {
  USER = 'user',
  ONBOARDING_COMPLETED = 'onboarding_completed',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export const SECURE_KEYS = new Set<STORAGE_KEYS>([
  STORAGE_KEYS.ACCESS_TOKEN,
  STORAGE_KEYS.REFRESH_TOKEN,
]);
