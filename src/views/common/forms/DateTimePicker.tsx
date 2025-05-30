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
import { getDisplayDate, getDisplayTime } from '../../../utils/dateTime';
import CustomText from '../CustomText';
import TextInput from './TextInput';

interface Props {
  initDate?: Date;
  maxDate?: Date;
  style?: ViewStyle;
  mode?: 'date' | 'time';
  spinner?: boolean;
  label?: string;
}

export default function DateTimePicker({
  maxDate,
  style,
  initDate = new Date(),
  mode = 'date',
  spinner,
  label,
}: Props) {
  const openAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value: initDate,
      display: spinner ? 'spinner' : 'default',
      maximumDate: maxDate,
      mode,
    });
  };

  return (
    <>
      {Platform.OS === 'android' ? (
        <View
          style={[
            styles.container,
            {
              justifyContent: label ? 'space-between' : 'center',
              paddingLeft: label ? 12 : 0,
            },
            style,
          ]}
        >
          {label && <CustomText style={styles.label}>{label}:</CustomText>}
          <TouchableOpacity onPress={openAndroidPicker}>
            <TextInput
              editable={false}
              defaultValue={
                mode === 'date'
                  ? getDisplayDate(initDate)
                  : getDisplayTime(initDate)
              }
              style={{ flexShrink: 1 }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.container,
            {
              justifyContent: label && !spinner ? 'space-between' : 'center',
              paddingLeft: label && !spinner ? 12 : 0,
            },
          ]}
        >
          {label && !spinner && (
            <CustomText style={styles.label}>{label}:</CustomText>
          )}
          <DefaultDateTimePicker
            value={initDate}
            style={style}
            mode={mode}
            display={
              mode === 'time' ? 'compact' : spinner ? 'spinner' : 'default'
            }
            accentColor={COLORS.primary600}
          />
        </View>
      )}
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  label: {
    color: COLORS.typo3,
  },
});
