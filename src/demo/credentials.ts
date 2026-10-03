import { User } from '../models/User';

type CredentialsUser = Partial<User> &
  Pick<User, 'email'> & {
    password: string;
  };

export const DEMO_USERS: CredentialsUser[] = [
  {
    email: 'demo@demo.com',
    password: 'demo1234',
  },
];
