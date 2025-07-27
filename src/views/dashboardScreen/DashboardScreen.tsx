import { usePreventRemove } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { MAIN_ROUTES } from '../../navigation/routes';
import BlurContainer from '../common/BlurContainer';
import AppointmentListItem from '../common/lists/AppointmentListItem';
import ListItemPlaceholder from '../common/lists/ListItemPlaceholder';
import RecommendationListItem from '../common/lists/RecommendationListItem';
import TipListItem from '../common/lists/TipListItem/TipListItem';
import PageWrapper from '../common/pageWrapper/PageWrapper';
import ScrollView from '../common/scrollView/ScrollView';
import DashboardHeader from './components/DashboardHeader';
import SummaryList from './components/SummaryList';
import useDashboardScreen from './useDashboardScreen';

export default function DashboardScreen() {
  usePreventRemove(true, () => {});
  const hook = useDashboardScreen();

  return (
    <PageWrapper style={styles.wrapper} noHeader>
      <DashboardHeader />

      <BlurContainer intensity={30} backgroundColor={COLORS.MAIN_OPACITY_3}>
        <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
          <SummaryList
            title='Twoje zalecenia'
            items={hook.recommendations}
            ItemComponent={RecommendationListItem}
            onSeeAllPress={() =>
              hook.navigation.navigate(MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR)
            }
            placeholder={() => (
              <ListItemPlaceholder
                title='Brak nowych zaleceń. Świetna robota!'
                text='Nie musisz nic planować, ale zawsze możesz zrobić coś dla siebie — sprawdź wskazówki Holiego'
                onClick={() =>
                  hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
                }
                summary
              />
            )}
          />

          <SummaryList
            title='Wskazówki zdrowotne'
            items={hook.likedTips}
            ItemComponent={TipListItem}
            onSeeAllPress={() =>
              hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
            }
            placeholder={() => (
              <ListItemPlaceholder
                text='Dodaj wskazówki do ulubionych, żeby je tutaj zobaczyć'
                onClick={() =>
                  hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
                }
                showIcon
                summary
              />
            )}
          />

          <SummaryList
            title='Nadchodzące wizyty'
            items={hook.appointments}
            ItemComponent={AppointmentListItem}
            onSeeAllPress={() =>
              hook.navigation.navigate(MAIN_ROUTES.APPOINTMENTS_SCREEN)
            }
            placeholder={() =>
              hook.recommendations.length > 0 ? (
                <ListItemPlaceholder
                  text='Brak zaplanowanych wizyt — sprawdź, które warto umówić'
                  onClick={() =>
                    hook.navigation.navigate(
                      MAIN_ROUTES.RECOMMENDATIONS_NAVIGATOR,
                    )
                  }
                  showIcon
                  summary
                />
              ) : (
                <ListItemPlaceholder
                  title='Wszystko ogarnięte!'
                  text='Sprawdź wskazówki Holiego, które pomogą Ci dbać o siebie na co dzień'
                  onClick={() =>
                    hook.navigation.navigate(MAIN_ROUTES.TIPS_SCREEN)
                  }
                  summary
                />
              )
            }
          />
        </ScrollView>
      </BlurContainer>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
});
