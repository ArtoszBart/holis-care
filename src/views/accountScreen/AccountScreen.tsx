import React from 'react';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import BackgroundWrapper from '../common/BackgroundWrapper';
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
          <MaterialCommunityIcons
            name='chevron-right'
            style={styles.nextIcon}
          />
        }
      />
      <AccountListItem
        label='Ustawienia powiadomień'
        onPress={() => {}}
        navigationIcon={
          <MaterialCommunityIcons
            name='chevron-right'
            style={styles.nextIcon}
          />
        }
      />
      <AccountListItem
        label='Regulamin'
        onPress={() => {}}
        navigationIcon={
          <Feather name='external-link' style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Polityka prywatności'
        onPress={() => {}}
        navigationIcon={
          <Feather name='external-link' style={styles.linkIcon} />
        }
      />
      <AccountListItem
        label='Wyloguj'
        onPress={() => {}}
        icon={<Feather name='log-out' style={styles.signOutIcon} />}
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
