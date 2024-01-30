import { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import * as Icons from 'react-icons/hi2';

interface IconProps extends IconBaseProps {
  name: keyof typeof Icons;
}

const Icon: FC<IconProps> = ({ name, size = 16, color = 'var(--catui-text-color)', ...props }) => {
  const RawIcon = Icons[name];

  return <RawIcon size={size} color={color} {...props} />;
};

export default Icon;
export type { IconProps };
