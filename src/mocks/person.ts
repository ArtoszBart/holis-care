import { User } from '../models/User';

export const personMock: User = {
  firstName: 'Ola',
  lastName: 'Nowacka',
  birthDate: new Date(1996, 3, 4),
  email: 'example@example.com',
  phoneNumber: '+48 601 000 000',
  city: 'Warszawa',
};
