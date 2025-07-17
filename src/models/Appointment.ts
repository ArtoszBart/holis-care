import { z } from 'zod';

export enum APPOINTMENT_STATUS {
  TO_PLAN = 'TO_PLAN',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum APPOINTMENT_CATEGORY {
  VISIT = 'VISIT',
  SPEC = 'SPEC',
  SELF_EXAM = 'SELF_EXAM',
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
  location: {
    id: string;
    name: string;
    street: string;
    city: string;
    postalCode: string;
  } | null;
  exam: {
    id: number;
    code: string;
    name: string;
    description: string;
    preparation: string;
    type: APPOINTMENT_CATEGORY;
  };
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
