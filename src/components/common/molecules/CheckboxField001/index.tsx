import React from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

type EventHandler = ({
  target,
  type,
}: {
  target: HTMLInputElement;
  type: string;
}) => void;

export type CheckboxFieldProps = {
  handleBlur: EventHandler;
  handleChange: EventHandler;
  name: string;
  value: string;
  label: string;
  ref: RefCallBack;
};

const CheckboxField001 = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (props, ref) => {
    const { handleBlur, handleChange, name, value, label } = props;

    return (
      <div className={styles.CheckboxField001}>
        <input
          id={`${name}_${value}`}
          className={styles.Field}
          type="checkbox"
          name={name}
          value={value}
          ref={ref}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label className={styles.Label} htmlFor={`${name}_${value}`}>
          {label}
        </label>
      </div>
    );
  },
);

export default CheckboxField001;
