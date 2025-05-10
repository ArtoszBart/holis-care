import React from 'react';
import { TextStyle } from 'react-native';

import { IconDefinition } from './iconDefinition.type';

type IconProps = {
  icon: IconDefinition;
  style?: TextStyle;
};

export default function Icon({ icon, style }: IconProps) {
  const { provider: IconProvider, name } = icon;

  return <IconProvider name={name as never} style={style} />;
}
