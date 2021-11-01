import React, { FocusEvent, ChangeEvent } from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

type Choice = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  handleBlur: ({ target, type }: FocusEvent<HTMLSelectElement>) => void;
  handleChange: ({ target, type }: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
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
