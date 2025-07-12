import { COLORS } from '../constants/colors';
import { Appointment } from '../models/Appointment';

export const appointments: Appointment[] = [
  {
    id: '1',
    date: new Date(2030, 2, 26, 9, 30),
    badgeColor: COLORS.BLUE,
    type: 'Wizyta w placówce',
    title: 'Internista',
    doctorName: 'Anna Nowak',
    facility: {
      name: 'Centrum medyczne',
      street: 'Zdrowia 15',
      city: 'Warszawa',
    },
  },
  {
    id: '2',
    date: new Date(2030, 3, 19, 17, 10),
    badgeColor: COLORS.PURPLE,
    type: 'Badanie',
    title: 'Morfologia krwi',
    facility: {
      name: 'Centrum medyczne',
      street: 'Zdrowia 15',
      city: 'Warszawa',
    },
  },
  {
    id: '3',
    date: new Date(2025, 3, 19, 17, 10),
    badgeColor: COLORS.PURPLE,
    type: 'Badanie',
    title: 'Morfologia krwi',
    facility: {
      name: 'Centrum medyczne',
      street: 'Zdrowia 15',
      city: 'Warszawa',
    },
  },
  {
    id: '4',
    date: new Date(2030, 2, 26, 9, 30),
    badgeColor: COLORS.YELLOW,
    type: 'Szczepienie',
    title: 'Kleszczowe zapalenie mózgu',
    doctorName: 'Jan Kowalski',
    facility: {
      name: 'Centrum medyczne',
      street: 'Zdrowia 15',
      city: 'Warszawa',
    },
  },
  {
    id: '5',
    date: new Date(2030, 3, 19, 17, 10),
    badgeColor: COLORS.RED,
    type: 'Konsultacja Online',
    title: 'Internista',
    doctorName: 'Anna Nowak',
  },
  {
    id: '6',
    date: new Date(2025, 3, 19, 17, 10),
    badgeColor: COLORS.RED,
    type: 'Konsultacja Online',
    title: 'Internista',
    doctorName: 'Anna Nowak',
  },
];
