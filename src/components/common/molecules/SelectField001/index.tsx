import React from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

type Choice = {
  label: string;
  value: string;
};

type EventHandler = ({
  target,
  type,
}: {
  target: HTMLSelectElement;
  type: string;
}) => void;

export type SelectFieldProps = {
  handleBlur: EventHandler;
  handleChange: EventHandler;
  name: string;
  ref: RefCallBack;
  choices: Choice[];
};

const SelectField001 = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const { name = '', choices, handleBlur, handleChange } = props;

    return (
      <div className={styles.SelectField001}>
        <select
          className={styles.Field}
          name={name}
          ref={ref}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {choices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

export default SelectField001;
