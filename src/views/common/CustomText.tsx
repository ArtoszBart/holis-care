// eslint-disable-next-line no-restricted-imports
import { StyleSheet, Text, type TextProps } from 'react-native';

import { COLORS } from '../../constants/colors';
import { getFont } from '../../constants/fonts';

export default function CustomText({ style, ...props }: TextProps) {
  const fontWeight = StyleSheet.flatten(style)?.fontWeight;

  return (
    <Text
      {...props}
      style={[
        styles.text,
        style,
        { fontFamily: getFont(fontWeight?.toString()), fontWeight: 400 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.TYPO_1,
  },
});
