// eslint-disable-next-line no-restricted-imports
import { StyleSheet, Text, type TextProps } from 'react-native';

import { getFont } from '../../constants/fonts';

export default function CustomText({ style, ...props }: TextProps) {
  const fontWeight = StyleSheet.flatten(style)?.fontWeight;

  return (
    <Text
      {...props}
      style={[
        style,
        { fontFamily: getFont(fontWeight?.toString()), fontWeight: 400 },
      ]}
    />
  );
}
