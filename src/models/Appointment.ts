import { z } from 'zod';
import { type Exam } from './Exam';
import { type Location } from './Location';

export enum APPOINTMENT_STATUS {
  TO_PLAN = 'TO_PLAN',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export type Appointment = {
  id: string;
  status: APPOINTMENT_STATUS;
  periodMonths: number;
  appointmentDate: Date | null;
  validityDate: Date | null;
  text: string | null;
  doctorName: string | null;
  locationString: string | null;
  location: Location | null;
  exam: Exam;
};

export const signUpAppointmentSchema = z.object({
  date: z.date({ required_error: 'Data jest wymagana' }),
  time: z.date({ required_error: 'Godzina jest wymagana' }),
  doctorName: z
    .string()
    .min(6, 'Imię i nazwisko lekarza jest za krótkie')
    .regex(
      /^[a-ząćęłńóśźż]+(?:[-'\s][a-ząćęłńóśźż]+)+$/i,
      'To nie jest poprawne imię i nazwisko',
    )
    .optional()
    .or(z.literal('')),
  locationString: z
    .string()
    .min(4, 'Adres jest za krótki')
    .optional()
    .or(z.literal('')),
  text: z.string().optional(),
});

export type SignUpAppointmentFormValues = z.infer<
  typeof signUpAppointmentSchema
>;

export type SignUpAppointmentDTO = Omit<
  SignUpAppointmentFormValues,
  'date' | 'time'
> & {
  appointmentDate: string;
  status: APPOINTMENT_STATUS.SCHEDULED;
};
