import type { ComponentProps, JSXElementConstructor, JSX } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
  ComponentProps<T> & {
    m?: number;
    margin?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    p?: number;
    padding?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
  };
