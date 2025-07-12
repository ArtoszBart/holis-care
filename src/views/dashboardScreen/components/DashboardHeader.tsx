import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { useUserStore } from '../../../stores/userStore';
import CustomText from '../../common/CustomText';
import { Icon, ICONS } from '../../common/icon';

export default function DashboardHeader() {
  const { user } = useUserStore();

  return (
    <View style={styles.header}>
      <Image
        style={styles.backgroundImage}
        source={require('../../../assets/images/omega-sm.png')}
        contentFit='contain'
      />

      <View style={styles.greetingsBox}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/profile-default.png')}
        />

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
  backgroundImage: {
    width: 130,
    height: 130,
    position: 'absolute',
    top: -10,
    right: 5,
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
