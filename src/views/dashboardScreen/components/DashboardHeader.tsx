import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { type MainNavigationProp } from '../../../navigation/main';
import { MAIN_ROUTES } from '../../../navigation/routes';
import { useUserStore } from '../../../stores/userStore';
import CustomText from '../../common/CustomText';
import { Icon, ICONS } from '../../common/icon';

export default function DashboardHeader() {
  const navigation = useNavigation<MainNavigationProp>();
  const { user } = useUserStore();

  return (
    <View style={styles.header}>
      <View style={styles.greetingsBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate(MAIN_ROUTES.ACCOUNT_NAVIGATOR)}
        >
          <Image
            style={styles.profileImage}
            source={require('../../../assets/images/profile-default.webp')}
          />
        </TouchableOpacity>

        <CustomText style={styles.greetings}>
          Cześć
          <CustomText style={{ fontWeight: 700, color: COLORS.ACCENT }}>
            {user?.firstName ? ` ${user.firstName}` : ''}!
          </CustomText>{' '}
          👋
        </CustomText>
      </View>

      <TouchableOpacity>
        <Icon icon={ICONS.BELL} style={styles.bellIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
    paddingHorizontal: 15,
  },
  greetingsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  greetings: {
    fontSize: 18,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  bellIcon: {
    backgroundColor: COLORS.MAIN_OPACITY_1,
    padding: 10,
    borderRadius: 999,
    fontSize: 24,
  },
});
