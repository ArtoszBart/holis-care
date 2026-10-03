import { StyleSheet, View } from 'react-native';
import { DEMO_USERS } from '../../../demo/credentials';
import CustomText from '../CustomText';

export default function DemoCredentials() {
  return (
    <View style={styles.credentials}>
      <CustomText style={styles.sectionTitle}>
        Dane logowania do konta demo
      </CustomText>

      <View style={styles.credentialRow}>
        <CustomText style={styles.label}>Email</CustomText>
        <CustomText style={styles.value}>{DEMO_USERS[0].email}</CustomText>
      </View>

      <View style={styles.divider} />

      <View style={styles.credentialRow}>
        <CustomText style={styles.label}>Hasło</CustomText>
        <CustomText style={styles.value}>{DEMO_USERS[0].password}</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  credentials: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EDEAF5',
    padding: 12,
    gap: 10,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#292344',
    marginBottom: 2,
  },
  credentialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: '#817C91',
  },
  value: {
    fontSize: 13,
    fontWeight: '600',
    color: '#39334F',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EDEAF5',
  },
});
