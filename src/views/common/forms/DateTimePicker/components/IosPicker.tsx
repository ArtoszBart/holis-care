import DefaultDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../../constants/colors';
import CustomText from '../../../CustomText';

interface Props {
  value: Date;
  mode?: 'date' | 'time';
  spinner?: boolean;
  label?: string;
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
  hasError: boolean;
}

export default function IosPicker({
  value,
  mode,
  spinner,
  label,
  onChange,
  hasError,
}: Props) {
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
      <DefaultDateTimePicker
        value={value}
        mode={mode}
        themeVariant='light'
        display={
          mode === 'time'
            ? 'compact'
            : spinner && !label
              ? 'spinner'
              : 'default'
        }
        accentColor={COLORS.ACCENT}
        onChange={onChange}
      />
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
    paddingVertical: 3.7,
    paddingRight: 4,
  },
  label: {
    color: COLORS.TYPO_3,
  },
});
