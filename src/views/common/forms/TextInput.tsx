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

interface Props extends TextInputProps {
  label?: string;
}

export default function TextInput({
  label,
  secureTextEntry,
  ...otherProps
}: Props) {
  const [isDotted, setIsDotted] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <CustomText style={styles.label}>{label}:</CustomText>}
      <ReactTextInput
        style={[styles.text, { fontFamily: getFont() }]}
        secureTextEntry={isDotted}
        clearButtonMode={secureTextEntry ? 'never' : 'always'}
        cursorColor={COLORS.primary600}
        selectionColor={COLORS.primary600}
        clearTextOnFocus={secureTextEntry}
        {...otherProps}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPressIn={() => setIsDotted(false)}
          onPressOut={() => {
            setIsDotted(true);
          }}
        >
          <Icon icon={ICONS.EYE} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: COLORS.stroke,
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
  text: {
    flex: 1,
    color: COLORS.typo1,
    paddingVertical: 14,
  },
  icon: {
    marginRight: 4,
    color: COLORS.typo4,
    fontSize: 16,
  },
});
