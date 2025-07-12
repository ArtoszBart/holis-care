import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../../../constants/colors';
import { getDisplayDate, getDisplayTime } from '../../../../../utils/dateTime';
import CustomText from '../../../CustomText';
import TextInput from '../../TextInput';

interface IProps {
  value: Date;
  mode?: 'date' | 'time';
  spinner?: boolean;
  label?: string;
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
  hasError: boolean;
  maxDate?: Date;
  fieldName: string;
}

export default function AndroidPicker({
  label,
  hasError,
  fieldName,
  mode,
  value,
  spinner,
  maxDate,
  onChange,
}: IProps) {
  const openAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value,
      display: spinner ? 'spinner' : 'default',
      maximumDate: maxDate,
      mode,
      onChange,
    });
  };

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: label ? 'space-between' : 'center',
          paddingLeft: label ? 12 : 0,
          borderColor: !hasError ? 'transparent' : COLORS.ERROR_RED,
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
  label: {
    color: COLORS.TYPO_3,
  },
});
