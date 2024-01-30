import { CSSProperties, PropsWithChildren } from 'react';

interface WrapperProps extends PropsWithChildren {
  flexDirection?: CSSProperties['flexDirection'];
}

export const Wrapper = ({ flexDirection = 'row', children }: WrapperProps) => {
  return <div style={{ display: 'flex', gap: 15, flexDirection }}>{children}</div>;
};
