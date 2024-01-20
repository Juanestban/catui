import {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import cn from 'classnames';

import s from './Switch.module.css';

type PrimitiveProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface SwitchProps
  extends Omit<PrimitiveProps, 'defaultValue' | 'defaultChecked' | 'checked' | 'children'> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ className, isChecked, isDisabled, onChange, ...props }, ref) => {
    const [checkbox, setCheckbox] = useState(isChecked);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCheckbox(e.target.checked);
      onChange?.(e);
    };

    useEffect(() => {
      setCheckbox(isChecked);
    }, [isChecked]);

    return (
      <div
        ref={ref}
        className={cn(
          s.switch,
          checkbox ? s.checked : s.unchecked,
          isDisabled && s.isDisabled,
          className,
        )}
      >
        <span className={cn(s.circle, checkbox && s.checked, isDisabled && s.isDisabled)} />
        <input
          type="checkbox"
          className={cn(s.checkbox, isDisabled && s.isDisabled)}
          checked={checkbox}
          onChange={handleChange}
          disabled={isDisabled}
          {...props}
        />
      </div>
    );
  },
) as FC<SwitchProps>;

export default Switch;
export type { SwitchProps };
