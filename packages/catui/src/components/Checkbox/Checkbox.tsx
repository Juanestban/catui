import { ChangeEvent, FC, forwardRef, useState, useEffect } from 'react';
import cn from 'classnames';

import { PrimitiveInputProps } from '../../types';
import { Icon } from '../Icons';

import s from './Checkbox.module.css';

type InputProps = PrimitiveInputProps<HTMLInputElement>;

interface CheckboxProps extends Omit<InputProps, 'type' | 'disabled' | 'checked' | 'onChange'> {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, id, children, isChecked, isIndeterminate, isDisabled, onChange, ...props },
    ref,
  ) => {
    const [checked, setChecked] = useState(isChecked);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      onChange?.(e);
    };

    useEffect(() => {
      setChecked(isChecked);
    }, [isChecked]);

    return (
      <label htmlFor={id} className={cn(s.container, isDisabled && s.isDisabled, className)}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          className={s.input}
          onChange={handleChange}
          disabled={isDisabled}
          {...props}
        />
        <span
          className={cn(
            s.checkbox,
            checked && s.checked,
            isIndeterminate && checked && s.isIndeterminate,
            isDisabled && s.isDisabled,
          )}
        >
          <Icon
            name={isIndeterminate ? 'HiMinus' : 'HiCheck'}
            color={`var(--colors-${isDisabled ? 'gray-500' : 'white'})`}
            className={cn(s.check, ((isIndeterminate && checked) || checked) && s.checked)}
          />
        </span>

        {children}
      </label>
    );
  },
) as FC<CheckboxProps>;

export default Checkbox;
export type { CheckboxProps };
