import {
  DetailedHTMLProps,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

export type PrimitiveProps<E extends HTMLElement> = DetailedHTMLProps<HTMLAttributes<E>, E>;

export type PrimitiveButtonProps<E extends HTMLButtonElement> = DetailedHTMLProps<
  ButtonHTMLAttributes<E>,
  E
>;

export type PrimitiveInputProps<E extends HTMLInputElement> = DetailedHTMLProps<
  InputHTMLAttributes<E>,
  E
>;

export type PrimitiveAnchorProps<E extends HTMLAnchorElement> = DetailedHTMLProps<
  AnchorHTMLAttributes<E>,
  E
>;
