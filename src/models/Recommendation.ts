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

export type Recommendation = {
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
