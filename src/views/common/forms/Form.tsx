import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../Button';
import TextInput from './TextInput';

export default function Form() {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoComplete='email'
        autoCorrect={false}
        inputMode='email'
        spellCheck={false}
      />
      <TextInput
        placeholder='Hasło'
        autoCapitalize='none'
        autoCorrect={false}
        contextMenuHidden
        secureTextEntry
        spellCheck={false}
        textContentType='newPassword'
      />
      <TextInput
        placeholder='Potwierdź hasło'
        autoCapitalize='none'
        autoCorrect={false}
        contextMenuHidden
        secureTextEntry
        spellCheck={false}
      />
      <Button
        label='Dalej'
        onPress={() => {
          // TODO:
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 24,
    width: '100%',
    gap: 10,
  },
});
