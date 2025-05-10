import React from 'react';
import { Linking, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';
import BackgroundWrapper from '../common/BackgroundWrapper';
import { Icon, ICONS } from '../common/icon';
import AccountListItem from './components/AccountListItem';
import UserContainer from './components/UserContainer';

export default function AccountScreen() {
  return (
    <BackgroundWrapper>
      <UserContainer />

      <AccountListItem
        label='Ustawienia'
        onPress={() => {}}
        navigationIcon={
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.nextIcon} />
        }
      />
      <AccountListItem
        label='Ustawienia powiadomień'
        onPress={() => {}}
        navigationIcon={
          <Icon icon={ICONS.CHEVRON_RIGHT} style={styles.nextIcon} />
        }
      />
      <AccountListItem
        label='Regulamin'
        onPress={() => Linking.openURL('https://google.pl/')}
        navigationIcon={
          <Icon icon={ICONS.EXTERNAL_LINK} style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Polityka prywatności'
        onPress={() => Linking.openURL('https://google.pl/')}
        navigationIcon={
          <Icon icon={ICONS.EXTERNAL_LINK} style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Wyloguj'
        onPress={() => {}}
        icon={<Icon icon={ICONS.SIGN_OUT} style={styles.signOutIcon} />}
      />
    </BackgroundWrapper>
  );
}

const styles = StyleSheet.create({
  nextIcon: {
    color: COLORS.typo2,
    fontSize: 24,
  },
  linkIcon: {
    color: COLORS.typo1,
    fontSize: 16,
    margin: 4,
  },
  signOutIcon: {
    color: COLORS.typo4,
    fontSize: 24,
  },
});
