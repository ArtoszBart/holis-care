import { COLORS } from '../constants/colors';
import { Recommendation } from '../models/Recommendation';

export const recommendations: Recommendation[] = [
  {
    id: '1',
    badgeColor: COLORS.purple,
    type: 'Badanie',
    title: 'Ginekolog',
    period: 'co 12 miesięcy',
    additionalInfo: 'cytologia, USG',
    description:
      'Wizyta u ginekologa pozwala na ocenę zdrowia narządów rodnych, profilaktykę raka szyjki macicy oraz wczesne wykrywanie nieprawidłowości.',
    preparation:
      'Zaleca się umawianie wizyty między 10. a 20. dniem cyklu. W dniu wizyty należy unikać irygacji, leków dopochwowych oraz współżycia.',
  },
  {
    id: '2',
    badgeColor: COLORS.purple,
    type: 'Badanie',
    title: 'Morfologia',
    period: 'co 6 miesięcy',
    additionalInfo: 'pełna morfologia',
    description:
      'Morfologia krwi to podstawowe badanie diagnostyczne oceniające ogólny stan zdrowia oraz wykrywające choroby, takie jak anemia czy infekcje.',
    preparation:
      'Należy być na czczo - ostatni posiłek minimum 8 godzin przed badaniem. Przed badaniem warto wypić szklankę wody.',
  },
  {
    id: '3',
    badgeColor: COLORS.yellow,
    type: 'Szczepienie',
    title: 'Szczepienie przeciw grypie',
    period: 'co roku (jesień)',
    additionalInfo: 'szczepionka sezonowa',
    description:
      'Szczepienie przeciwko grypie chroni przed zachorowaniem na wirusa grypy oraz zmniejsza ryzyko powikłań.',
    preparation:
      'W dniu szczepienia należy być zdrowym - bez gorączki i ostrych objawów infekcji. Zaleca się wcześniejszą konsultację z lekarzem.',
  },
  {
    id: '4',
    badgeColor: COLORS.red,
    type: 'Konsultacja online',
    title: 'Internista',
    period: 'jednorazowo',
    additionalInfo: 'omówienie wyników',
    description:
      'Internista zajmuje się diagnozowaniem i leczeniem chorób wewnętrznych. Konsultacja online pozwala szybko skonsultować dolegliwości.',
    preparation:
      'Przed konsultacją warto przygotować listę objawów, aktualnie przyjmowane leki i wyniki badań (jeśli są dostępne).',
  },
];
