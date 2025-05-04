import { ColorValue } from '../constants/colors';
import { Facility } from './Facility';

export type Appointment = {
  id: string;
  date: Date;
  badgeColor: ColorValue;
  type: string;
  title: string;
  doctorName?: string;
  facility?: Facility;
};
