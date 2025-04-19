import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const onboardingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  textContainer: {
    maxWidth: 400,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.typo1,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.typo2,
  },
});
