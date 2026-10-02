import { Alert } from 'react-native';

const AsyncAlert = (
  title: string,
  message: string,
  destructive = false,
): Promise<boolean> => {
  return new Promise((resolve) => {
    Alert.alert(title, message, [
      {
        text: 'Potwierdź',
        onPress: () => resolve(true),
        style: destructive ? 'destructive' : 'default',
      },
      {
        text: 'Anuluj',
        onPress: () => resolve(false),
        style: 'cancel',
      },
    ]);
  });
};

export default AsyncAlert;
