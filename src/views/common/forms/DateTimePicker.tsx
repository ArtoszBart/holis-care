import DefaultDateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
// import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { getDisplayDate, getDisplayTime } from '../../../utils/dateTime';
import CustomText from '../CustomText';
import TextInput from './TextInput';

export interface IDateTimePicker {
  value?: Date;
  maxDate?: Date;
  mode?: 'date' | 'time';
  spinner?: boolean;
  label?: string;
  fieldName: string;
  onChange?: (date: Date) => void;
  errorMessage?: string;
}

export default function DateTimePicker({
  value = new Date(),
  maxDate,
  mode = 'date',
  spinner,
  label,
  fieldName,
  onChange,
  errorMessage,
}: IDateTimePicker) {
  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (onChange && date && event.type === 'set') onChange(date);
  };

  const openAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value,
      display: spinner ? 'spinner' : 'default',
      maximumDate: maxDate,
      mode,
      onChange: handleDateChange,
    });
  };

  return (
    <View>
      {Platform.OS === 'android' ? (
        <View
          style={[
            styles.container,
            {
              justifyContent: label ? 'space-between' : 'center',
              paddingLeft: label ? 12 : 0,
              borderColor: !errorMessage ? 'transparent' : COLORS.red,
            },
          ]}
        >
          {label && <CustomText style={styles.label}>{label}:</CustomText>}
          <TouchableOpacity onPress={openAndroidPicker}>
            <TextInput
              fieldName={fieldName}
              editable={false}
              defaultValue={
                mode === 'date' ? getDisplayDate(value) : getDisplayTime(value)
              }
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.container,
            styles.iosContainer,
            {
              justifyContent: label && !spinner ? 'space-between' : 'center',
              paddingLeft: label && !spinner ? 12 : 0,
              borderColor: !errorMessage ? 'transparent' : COLORS.red,
            },
          ]}
        >
          {label && !spinner && (
            <CustomText style={styles.label}>{label}:</CustomText>
          )}
          <DefaultDateTimePicker
            value={value}
            mode={mode}
            themeVariant='light'
            display={
              mode === 'time' ? 'compact' : spinner ? 'spinner' : 'default'
            }
            accentColor={COLORS.primary600}
            onChange={handleDateChange}
          />
        </View>
      )}
      {errorMessage && (
        <CustomText style={styles.errorText}>{errorMessage}</CustomText>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderWidth: 1,
    borderRadius: 6,
  },
  iosContainer: {
    paddingVertical: 3.7,
    paddingRight: 4,
  },
  label: {
    color: COLORS.typo3,
  },
  errorText: {
    color: COLORS.red,
    marginTop: 2,
    paddingHorizontal: 12,
  },
});
