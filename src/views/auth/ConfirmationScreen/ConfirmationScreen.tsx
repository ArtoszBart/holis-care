import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { type ConfirmationScreenProps } from '../../../navigation/auth';
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import TextInput from '../../common/forms/TextInput';
import PageWrapper from '../../common/pageWrapper/PageWrapper';
import useConfirmationScreen from './useConfirmationScreen';

export default function ConfirmationScreen({ route }: ConfirmationScreenProps) {
  const { onSubmit, setConfirmationCode } = useConfirmationScreen(route.params);

  return (
    <PageWrapper style={styles.container} noHeader>
      <CustomText style={styles.text}>
        Na podany adres e-mail został wysłany kod weryfikacyjny - wpisz go
        poniżej
      </CustomText>

      <TextInput
        fieldName=''
        placeholder='Kod weryfikacyjny'
        onChangeText={setConfirmationCode}
      />

      <Button label='Zweryfikuj kod' style={styles.button} onPress={onSubmit} />
    </PageWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    alignItems: 'flex-start',
    gap: 60,
  },
  text: {
    fontSize: 16,
    color: COLORS.TYPO_2,
  },
  button: {
    marginTop: 'auto',
  },
});
