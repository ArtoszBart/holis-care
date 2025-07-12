import { z } from 'zod';
import { COLORS } from '../constants/colors';
import { Facility } from './Facility';

export type Appointment = {
  id: string;
  date: Date;
  badgeColor: COLORS;
  type: string;
  title: string;
  doctorName?: string;
  facility?: Facility;
  aditionalInfo?: string;
};

export const newAppointmentSchema = z.object({
  type: z.string(),
  title: z.string(),
  date: z.date({ required_error: 'Data jest wymagana' }),
  time: z.date({ required_error: 'Godzina jest wymagana' }),
  doctor: z
    .string({ required_error: 'Imię i nazwisko lekarza jest wymagane' })
    .min(6, 'Imię i nazwisko lekarza jest za krótkie')
    .regex(
      /^[a-ząćęłńóśźż]+(?:[-'\s][a-ząćęłńóśźż]+)+$/i,
      'To nie jest poprawne imię i nazwisko',
    ),
  address: z
    .string({ required_error: 'Adres jest wymagany' })
    .min(1, 'Adres jest wymagany'),
  aditionalInfo: z.string().optional(),
});

export type NewAppointmentFormValues = z.infer<typeof newAppointmentSchema>;

export type NewAppointmentDTO = Omit<
  NewAppointmentFormValues,
  'date' | 'time'
> & {
  date: string;
};
