import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Form({ children }: PropsWithChildren) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 24,
    width: '100%',
    gap: 10,
  },
});
