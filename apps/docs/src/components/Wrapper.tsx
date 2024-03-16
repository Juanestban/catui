import type { PropsWithChildren } from 'react';
import { CatuiTheme } from 'catui-design';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <CatuiTheme>{children}</CatuiTheme>;
};
