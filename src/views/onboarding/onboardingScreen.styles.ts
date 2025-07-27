import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const onboardingScreenStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 50,
  },
  textContainer: {
    width: '100%',
    backgroundColor: COLORS.MAIN_OPACITY_3,
    padding: 15,
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.TYPO_1,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.TYPO_2,
  },
});
