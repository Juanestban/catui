import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div style={{ display: 'flex', gap: 15 }}>{children}</div>;
};
