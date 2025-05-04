import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { personMock } from '../../../mocks/person';
import CustomText from '../../common/CustomText';

export default function DashboardHeader() {
  return (
    <>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={require('../../../assets/images/omega-sm.svg')}
          contentFit='contain'
        />
      </View>
      <View style={styles.header}>
        <View style={styles.greetingsBox}>
          <Image
            style={styles.profileImage}
            source={require('../../../mocks/person.png')}
          />
          <CustomText style={styles.greetings}>
            Cześć{' '}
            <CustomText style={{ fontWeight: 700, color: COLORS.primary600 }}>
              {personMock.name}!
            </CustomText>{' '}
            👋
          </CustomText>
        </View>
        <TouchableOpacity>
          <Feather name='bell' size={24} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 20,
  },
  backgroundImage: {
    width: 120,
    height: 120,
  },
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
    backgroundColor: '#fffa',
    padding: 10,
    borderRadius: 999,
  },
});
