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
  date: z.date({ required_error: 'Data jest wymagana' }),
  time: z.date({ required_error: 'Godzina jest wymagana' }),
  doctorName: z
    .string({ required_error: 'Imię i nazwisko lekarza jest wymagane' })
    .min(6, 'Imię i nazwisko lekarza jest za krótkie')
    .regex(
      /^[a-ząćęłńóśźż]+(?:[-'\s][a-ząćęłńóśźż]+)+$/i,
      'To nie jest poprawne imię i nazwisko',
    )
    .optional(),
  locationString: z.string().min(4, 'Adres jest za krótki').optional(),
  text: z.string().optional(),
});

export type NewAppointmentFormValues = z.infer<typeof newAppointmentSchema>;

export type NewAppointmentDTO = Omit<
  NewAppointmentFormValues,
  'date' | 'time'
> & {
  appointmentDate: string;
};
