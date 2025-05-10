import DefaultDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';

import { COLORS } from '../../../constants/colors';
import { Icon, ICONS } from '../icon';
import TextInput from './TextInput';

interface IDateTimePicker {
  initDate?: Date;
  maxDate?: Date;
  style?: ViewStyle;
}

export default function DateTimePicker({
  maxDate,
  style,
  initDate = new Date(),
}: IDateTimePicker) {
  const openAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value: initDate,
      display: 'spinner',
      maximumDate: maxDate,
    });
  };

  return (
    <>
      {Platform.OS === 'android' ? (
        <View style={[styles.androidButton, style]}>
          <TouchableOpacity onPress={openAndroidPicker} style={styles.input}>
            <TextInput
              editable={false}
              defaultValue={initDate.toLocaleDateString()}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openAndroidPicker}>
            <Icon icon={ICONS.CALENDAR} style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : (
        <DefaultDateTimePicker
          value={initDate}
          display='spinner'
          maximumDate={maxDate}
          style={style}
        />
      )}
    </>
  );
}

export const styles = StyleSheet.create({
  androidButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    flex: 1,
  },
  icon: {
    color: COLORS.primary600,
    fontSize: 26,
  },
});
