import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Quikview2_32x32_4 from '../../png/Quikview2_32x32_4.png';

export const quikview2Data = {
  '32x32_4': {
    imageSrc: Quikview2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Quikview2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Quikview2: React.FC<Quikview2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = quikview2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
