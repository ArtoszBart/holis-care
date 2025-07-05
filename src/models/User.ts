import { z } from 'zod';
import { MAX_BIRTH_DATE, MIN_AGE } from '../constants/age';

export type User = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  city: string;
};

export const userSchema = z.object({
  firstName: z
    .string({ required_error: 'Imię jest wymagane' })
    .min(1, { message: 'Imię nie może być puste' }),
  lastName: z
    .string({ required_error: 'Nazwisko jest wymagane' })
    .min(1, { message: 'Nazwisko nie może być puste' }),
  birthDate: z
    .date({ required_error: 'Data urodzenia jest wymagana' })
    .max(MAX_BIRTH_DATE, { message: `Musisz mieć co najmniej ${MIN_AGE} lat` }),
  email: z
    .string({ required_error: 'Adres e-mail jest wymagany' })
    .email('Adres e-mail jest niepoprawny'),
  phoneNumber: z
    .string({ required_error: 'Numer telefonu jest wymagany' })
    .regex(/^(?:\+48|0048)?[-\s]?\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
      message: 'Numer telefonu niepoprawny',
    }),
  city: z
    .string({ required_error: 'Miejscowość jest wymagana' })
    .min(1, { message: 'Miejscowość nie może być pusta' }),
});

export type UserDTO = z.infer<typeof userSchema>;

export type PersonalizationDTO = {
  email: string;
  sex: string;
  dateOfBirth: string;
  firstName: string;
};

export const personalizationSchema = z.object({
  dateOfBirth: z
    .date({ required_error: 'Data urodzenia jest wymagana' })
    .max(MAX_BIRTH_DATE, { message: `Musisz mieć co najmniej ${MIN_AGE} lat` }),
  firstName: z
    .string({ required_error: 'Imię jest wymagane' })
    .min(1, { message: 'Imię musi mieć conajmniej 2 znaki' }),
  isConsentGiven: z.boolean().refine((val) => val === true, {
    message: 'Zgoda jest wymagana',
  }),
});
