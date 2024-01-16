import { PropsWithChildren } from 'react';

import { CatuiTheme, useTheme } from 'catui';

const InfoTheme = () => {
  const { theme } = useTheme();

  return <span style={{ display: 'block', marginBottom: 20 }}>current theme: {theme}</span>;
};

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <CatuiTheme>
      <InfoTheme />
      <div style={{ display: 'flex', gap: 15 }}>{children}</div>
    </CatuiTheme>
  );
};
