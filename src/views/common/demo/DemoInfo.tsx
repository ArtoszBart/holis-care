import { StyleSheet, View } from 'react-native';
import CustomText from '../CustomText';
import DemoCredentials from './DemoCredentials';

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

      <DemoCredentials />
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
    color: '#625D75',
  },
});
