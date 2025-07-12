import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { useUserStore } from '../../../stores/userStore';
import { getAge, getDisplayDateLong } from '../../../utils/dateTime';
import CustomText from '../../common/CustomText';

export default function UserContainer() {
  const { user } = useUserStore();

  return (
    <View style={styles.header}>
      <Image
        style={styles.profileImage}
        source={require('../../../assets/images/profile-default.png')}
      />
      <View style={styles.userDataContainer}>
        <CustomText style={styles.userTitle}>
          {user?.firstName ?? '---'} {user?.lastName}
        </CustomText>
        {user?.dateOfBirth && (
          <CustomText style={styles.userSubtitle}>
            wiek: {getAge(user.dateOfBirth)} (
            {getDisplayDateLong(user.dateOfBirth)})
          </CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 16,
    backgroundColor: 'white',
  },
  userDataContainer: {
    paddingVertical: 2,
    justifyContent: 'space-between',
  },
  userTitle: {
    fontSize: 18,
  },
  userSubtitle: {
    fontSize: 12,
    color: COLORS.TYPO_2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
