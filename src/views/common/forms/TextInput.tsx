import React, { useState } from 'react';
import {
  TextInput as ReactTextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLORS } from '../../../constants/colors';
import { getFont } from '../../../constants/fonts';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

export interface ITextInput extends TextInputProps {
  fieldName: string;
  label?: string;
  defaultValue?: string;
  errorMessage?: string;
}

export default function TextInput({
  label,
  defaultValue,
  secureTextEntry,
  errorMessage,
  ...otherProps
}: ITextInput) {
  const [isDotted, setIsDotted] = useState(secureTextEntry);

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderColor: !errorMessage ? COLORS.stroke : COLORS.red,
          },
        ]}
      >
        {label && <CustomText style={styles.label}>{label}:</CustomText>}
        <View style={styles.textContainer}>
          <ReactTextInput
            style={[styles.text, { fontFamily: getFont() }]}
            secureTextEntry={isDotted}
            clearButtonMode={secureTextEntry ? 'never' : 'always'}
            cursorColor={COLORS.primary600}
            selectionColor={COLORS.primary600}
            clearTextOnFocus={secureTextEntry}
            placeholderTextColor={COLORS.stroke}
            defaultValue={defaultValue}
            {...otherProps}
          />
        </View>
        {secureTextEntry && (
          <TouchableOpacity
            onPressIn={() => setIsDotted(false)}
            onPressOut={() => {
              setIsDotted(true);
            }}
            style={{ marginLeft: 'auto' }}
          >
            <Icon icon={ICONS.EYE} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && (
        <CustomText style={styles.errorText}>{errorMessage}</CustomText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  label: {
    marginRight: 5,
    color: COLORS.typo3,
  },
  textContainer: {
    flexGrow: 1,
  },
  text: {
    color: COLORS.typo1,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 4,
    color: COLORS.typo4,
    fontSize: 16,
  },
  errorText: {
    color: COLORS.red,
    marginTop: 2,
    paddingHorizontal: 13,
  },
});
