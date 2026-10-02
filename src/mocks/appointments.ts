import { type Appointment, APPOINTMENT_STATUS } from '../models/Appointment';
import { EXAM_CATEGORY } from '../models/Exam';

export const appointments: Appointment[] = [
  {
    id: '307be6c7-0b3e-447b-9be5-e50e5b556695',
    status: APPOINTMENT_STATUS.TO_PLAN,
    exam: {
      id: 12,
      code: 'DIABE',
      name: 'Glikemia na czczo',
      description:
        'Badanie cukru na czczo, czyli pomiar poziomu glukozy we krwi po okresie niejedzenia, to podstawowe badanie diagnostyczne w kierunku cukrzycy i stanów przedcukrzycowych. Polega na pobraniu próbki krwi po co najmniej 8 godzinach od ostatniego posiłku, aby ocenić, jak organizm reguluje poziom cukru bez wpływu spożytego jedzenia.',
      preparation:
        'Na czczo: Nie jedz przez co najmniej 8-12 godzin przed badaniem. Możesz pić tylko wodę.\nBez kawy i herbaty: Unikaj napojów innych niż woda przed badaniem.\nNie pal papierosów: Powstrzymaj się od palenia rano przed badaniem, ponieważ może to wpłynąć na wynik.\nZachowaj spokój: Stres może wpływać na poziom glukozy, więc postaraj się być wypoczęty.',
      type: EXAM_CATEGORY.VISIT,
    },
    appointmentDate: null,
    validityDate: null,
    text: null,
    doctorName: null,
    location: null,
    locationString: 'ul. Dębowa 2',
    periodMonths: 3,
  },
  {
    id: '71ac7235-c127-4932-b328-d856d3d39605',
    status: APPOINTMENT_STATUS.SCHEDULED,
    exam: {
      id: 7,
      code: 'BREAST_USG',
      name: 'USG piersi',
      description:
        'USG piersi jest bezpiecznym, bezbolesnym badaniem wykorzystującym ultradźwięki do zobrazowania piersi. Jest badaniem pierwszego wyboru u młodych kobiet. Jest też bezpieczne dla pacjentek ciężarnych i karmiących piersią. Odbywa się zazwyczaj w pozycji leżącej, z ułożeniem rąk za głową. Elementem badania jest również ocena węzłów chłonnych pachowych.',
      preparation:
        'Najlepiej wykonać badanie w 1. fazie cyklu miesięcznego (po miesiączce). Nie wymaga specjalnego przygotowania. ',
      type: EXAM_CATEGORY.SPEC,
    },
    appointmentDate: new Date(2030, 3, 19, 17, 10),
    validityDate: null,
    text: null,
    doctorName: null,
    location: null,
    locationString: 'ul. Krótka 5, Łódź',
    periodMonths: 1,
  },
  {
    id: 'a6b4db80-4ced-42a8-bbf9-a413eb3bf7e5',
    status: APPOINTMENT_STATUS.SCHEDULED,
    exam: {
      id: 5,
      code: 'BRCA',
      name: 'Test genetyczny BRCA 1/2',
      description:
        'Badanie genetyczne, które ma na celu wykrycie predyspozycji do dziedzicznej postaci raka piersi i jajnika. Zalecane osobom, u których wśród najbliższych krewnych występowały zachorowania na raka piersi/jajnika, zwłaszcza jeśli dotyczyły młodszych osób <40rż , a także jeśli wykryto mutację genu BRCA1/2 u innego członka rodziny. W sytuacji pozytywnego wyniku pacjentki zostają objęte specjalnym programem badań przesiewowych oraz będą poinformowane o możliwościach profilaktyki chirurgicznej.',
      preparation:
        'Badanie nie wymaga specjalnego przygotowania. Polega na pobraniu krwi/wymazu z policzka. Wynik badania warto skonsultować z Genetykiem klinicznym.',
      type: EXAM_CATEGORY.VISIT,
    },
    appointmentDate: new Date(2025, 3, 19, 17, 10),
    validityDate: null,
    text: null,
    doctorName: null,
    location: null,
    locationString: 'ul. Spacerowa 12B, 30-001 Kraków',
    periodMonths: 12,
  },
  {
    id: 'def84007-7e42-4443-a7cb-b0acc985a169',
    status: APPOINTMENT_STATUS.TO_PLAN,
    exam: {
      id: 13,
      code: 'EAR',
      name: 'Badanie słuchu',
      description:
        'Badanie audiometryczne tonalne przeprowadza się w wyciszonej kabinie z użyciem audiometru, który emituje tony różnych częstotliwości przez specjalistyczne słuchawki. Po usłyszeniu dźwięku pacjent naciska przycisk, a każde ucho testuje się oddzielnie.',
      preparation:
        'Przed badaniem audiometrycznym zadbaj o dobre zdrowie - nie przychodź przeziębiony ani z zapaleniem ucha. Koniecznie odwiedź wcześniej laryngologa, który sprawdzi stan uszu i usunie ewentualną woskowinę. Weź ze sobą dokumentację medyczną dotyczącą słuchu. Przyjdź nieco wcześniej, by przeprowadzić próby przed właściwym testem i dobrze zrozumieć jego przebieg.',
      type: EXAM_CATEGORY.SELF_EXAM,
    },
    appointmentDate: null,
    validityDate: null,
    text: null,
    doctorName: null,
    location: null,
    locationString: 'ul. Słowackiego 18/4, 00-950 Warszawa',
    periodMonths: 24,
  },
  {
    id: '9213afe9-2346-484d-8c00-112afa1e943c',
    status: APPOINTMENT_STATUS.COMPLETED,
    exam: {
      id: 17,
      code: 'FIBER',
      name: 'Fiberoskopia laryngologiczna',
      description:
        'Fiberoskopia laryngologiczna wraz z badaniem laryngologicznym stanowią podstawowe badania w zakresie profilaktyki wtórnej nowotworów głowy i szyi (chodzi o nowotwory m.in. jamy ustnej, gardła, krtani, zatok obocznych nosa). Badanie fiberoskopii pomaga za pomocą kamery obejrzeć na ekranie trudno dostępne w standardowym badaniu laryngologicznym miejsca. Polega na wprowadzeniu cienkiego, giętkiego aparatu do nosogardła. Badanie odbywa się w pozycji siedzącej, trwa od kilku do kilkunastu minut. Nie wymaga znieczulenia, ale może się zdarzyć, że zostanie zaproponowane znieczulenie miejscowe.',
      preparation:
        'Zaleca się wykonanie badania po kilku godzinach bycia na czczo. ',
      type: EXAM_CATEGORY.VISIT,
    },
    appointmentDate: new Date(2025, 1, 19, 17, 10),
    validityDate: null,
    text: null,
    doctorName: null,
    location: null,
    locationString: 'ul. gen. Władysława Andersa 25/10, 61-894 Poznań',
    periodMonths: 6,
  },
];
