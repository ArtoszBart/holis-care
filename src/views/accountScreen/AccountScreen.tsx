import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { EXTERNAL_LINKS } from '../../constants/externalLinks';
import { AccountNavigationProp } from '../../navigation/account';
import { ACCOUNT_ROUTES } from '../../navigation/routes';
import { Icon, ICONS } from '../common/icon';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import AccountListItem from './components/AccountListItem';
import UserContainer from './components/UserContainer';
import useAccountScreen from './useAccountScreen';

export default function AccountScreen() {
  const navigation = useNavigation<AccountNavigationProp>();
  const { onSignOut } = useAccountScreen();

  return (
    <PageWrapper>
      <UserContainer />

      <AccountListItem
        label='Ustawienia'
        onPress={() =>
          navigation.navigate(ACCOUNT_ROUTES.ACCOUNT_SETTINGS_SCREEN)
        }
        navigationIcon={
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.nextIcon} />
        }
      />
      {/* <AccountListItem
        label='Ustawienia powiadomień'
        onPress={() => {}}
        navigationIcon={
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.nextIcon} />
        }
      /> */}
      <AccountListItem
        label='Regulamin'
        onPress={() => Linking.openURL(EXTERNAL_LINKS.TERMS_OF_SERVICE_URL)}
        navigationIcon={
          <Icon icon={ICONS.EXTERNAL_LINK} style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Polityka prywatności'
        onPress={() => Linking.openURL(EXTERNAL_LINKS.PRIVACY_POLICY_URL)}
        navigationIcon={
          <Icon icon={ICONS.EXTERNAL_LINK} style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Wyloguj'
        onPress={onSignOut}
        icon={<Icon icon={ICONS.SIGN_OUT} style={styles.signOutIcon} />}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  nextIcon: {
    color: COLORS.TYPO_2,
    fontSize: 24,
  },
  linkIcon: {
    color: COLORS.TYPO_1,
    fontSize: 16,
    margin: 4,
  },
  signOutIcon: {
    color: COLORS.TYPO_4,
    fontSize: 24,
  },
});
