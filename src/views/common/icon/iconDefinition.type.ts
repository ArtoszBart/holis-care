import { ICONS } from './availableIcons';

export type IconDefinition = (typeof ICONS)[keyof typeof ICONS];
