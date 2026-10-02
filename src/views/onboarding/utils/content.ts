import { type SlideItem } from './types';

export const slides: SlideItem[] = [
  {
    key: '1',
    image: require('../../../assets/images/backgrounds/background-hello.webp'),
    header: 'Witamy w Twoim centrum zdrowia',
    paragraph:
      '👋 Cześć! Cieszę się, że jesteś. Jestem Holis, Twój osobisty doradca profilaktyki zdrowotnej. Razem zadbamy o Twoje zdrowie w wygodny i nowoczesny sposób! 🌿✨',
  },
  {
    key: '2',
    image: require('../../../assets/images/backgrounds/background-book.webp'),
    header: 'Umawiaj wizyty szybko i wygodnie',
    list: [
      'Umów wizytę, badanie lub szczepienie',
      'Sprawdź dostępne terminy na mapie lub liście',
      'Otrzymuj spersonalizowane rekomendacje badań',
    ],
    listBullets: ['🔹'],
  },
  {
    key: '3',
    image: require('../../../assets/images/backgrounds/background-manage.webp'),
    header: 'Zarządzaj wizytami z łatwością',
    list: [
      'Korzystaj z podglądu do zaplanowanych wizyt w kalendarzu',
      'Przypomnimy Ci o nadchodzących wizytach - już nic Ci nie umknie!',
      'Zmieniaj terminy lub anuluj wizyty bez kontaktu z infolinią',
    ],
    listBullets: ['🔹'],
  },
  {
    key: '4',
    image: require('../../../assets/images/backgrounds/background-collect.webp'),
    header: 'Zbieraj wyniki i badania',
    list: [
      'Korzystaj z dostępu do wyników badań w apce',
      'Dodawaj własne wyniki - śledź postępy',
      'Śledź historię wizyt i badań - od teraz jest zawsze pod ręką',
    ],
    listBullets: ['🔹'],
  },
  {
    key: '5',
    image: require('../../../assets/images/backgrounds/background-tips.webp'),
    header: 'Korzystaj ze wskazówek Holi',
    list: [
      'Zacznij od małych kroków, żeby wdrożyć wielkie zmiany!',
      'Holi dostarczy Ci krótkie, praktyczne porady dotyczące zdrowia i profilaktyki',
      'Zadbaj o siebie na co dzień i czerp wiedzę w prosty, przystępny sposób!',
    ],
    listBullets: ['💡', '🧠', '🌱'],
  },
  {
    key: '6',
    image: require('../../../assets/images/backgrounds/background-disclaimer.webp'),
    header: 'Oświadczenie',
    paragraph:
      'Aplikacja Holis nie świadczy usług medycznych, profilaktycznych ani diagnostycznych. Rekomendacje i informacje prezentowane w aplikacji oparte są na dostępnych danych i algorytmach, jednak mają wyłącznie charakter edukacyjny i informacyjny. Nie zastępują one profesjonalnej porady lekarskiej, diagnostyki ani leczenia. W przypadku pytań dotyczących zdrowia należy zawsze skonsultować się z wykwalifikowanym pracownikiem ochrony zdrowia.',
  },
];
