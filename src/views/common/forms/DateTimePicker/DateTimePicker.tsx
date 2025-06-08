import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Platform, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import CustomText from '../../CustomText';
import AndroidPicker from './components/AndroidPicker';
import IosPicker from './components/IosPicker';

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

  return (
    <View>
      {Platform.OS === 'android' ? (
        <AndroidPicker
          value={value}
          mode={mode}
          spinner={spinner}
          label={label}
          onChange={handleDateChange}
          hasError={!!errorMessage}
          maxDate={maxDate}
          fieldName={fieldName}
        />
      ) : (
        <IosPicker
          value={value}
          label={label}
          mode={mode}
          onChange={handleDateChange}
          spinner={spinner}
          hasError={!!errorMessage}
        />
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
    color: COLORS.errorRed,
    marginTop: 2,
    paddingHorizontal: 12,
  },
});
