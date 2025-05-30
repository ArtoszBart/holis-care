const {
  createRunOncePlugin,
  withAndroidStyles,
  AndroidConfig,
} = require('@expo/config-plugins');

function disableDarkMode(styles) {
  const newStyles = AndroidConfig.Styles.assignStylesValue(styles, {
    add: true,
    parent: AndroidConfig.Styles.getAppThemeGroup(),
    name: `android:forceDarkAllowed`,
    value: 'false',
  });

  return newStyles;
}

const withDisableForcedDarkModeAndroid = (config) => {
  return withAndroidStyles(config, (config) => {
    config.modResults = disableDarkMode(config.modResults);
    return config;
  });
};

module.exports = createRunOncePlugin(
  withDisableForcedDarkModeAndroid,
  'disable-forced-dark-mode',
  '1.0.0',
);
