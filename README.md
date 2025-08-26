# Holis Mobile

Mobile App for Holis. Expo (React Native).

## Install dependencies

```bash
npm install
```

## Start in development

You can use Expo to run the app on a device, emulator, or in the browser.

- Start the dev server (Metro):
  ```bash
  npm start
  ```
- Run on Android (emulator or connected device):
  ```bash
  npm run android
  ```
- Run on iOS (macOS only):
  ```bash
  npm run ios
  ```
- Run in the browser (web):
  ```bash
  npm run web
  ```

## Environment variables (dev)

This app uses Expo public env vars (prefixed with `EXPO_PUBLIC_`). Adjust the `.env` file to match your environment.

Note: Production and development defaults for these vars are configured in `eas.json`.

## Create native builds with EAS

EAS profiles are defined in `eas.json`.

1) Login (first time only):

```bash
eas login
```

2) Development build (with dev client):

```bash
eas build --profile development --platform android
# or
# eas build --profile development --platform ios
```

3) Production build:

```bash
eas build --profile production --platform android   # APK per eas.json
# or
# eas build --profile production --platform ios
```

4) Submit to stores (optional):

```bash
eas submit --profile production --platform android
# or
# eas submit --profile production --platform ios
```
