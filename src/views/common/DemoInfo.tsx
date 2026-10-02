import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';

export default function DemoInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <CustomText style={styles.title}>Wersja demonstracyjna</CustomText>
          <CustomText style={styles.description}>
            Korzystasz z demonstracyjnej wersji aplikacji Holis Care. Aplikacja
            nie jest połączona z bazą danych — wszystkie dane są zapisane
            bezpośrednio w kodzie.
          </CustomText>
          <CustomText style={styles.description}>
            Wciąż możesz się zalogować danymi poniżej lub utworzyć konto
            tymczasowe.
          </CustomText>
        </View>
      </View>

      <View style={styles.credentials}>
        <CustomText style={styles.sectionTitle}>
          Dane logowania do konta demo
        </CustomText>

        <View style={styles.credentialRow}>
          <CustomText style={styles.label}>Email</CustomText>
          <CustomText style={styles.value}>demo@demo.com</CustomText>
        </View>

        <View style={styles.divider} />

        <View style={styles.credentialRow}>
          <CustomText style={styles.label}>Hasło</CustomText>
          <CustomText style={styles.value}>demo1234</CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  headerText: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#292344',
  },
  description: {
    fontSize: 14,
    // lineHeight: 19,
    color: '#625D75',
  },
  credentials: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EDEAF5',
    padding: 12,
    gap: 10,
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
