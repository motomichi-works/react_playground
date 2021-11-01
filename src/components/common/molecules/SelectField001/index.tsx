import React from 'react';
import { RefCallBack, ChangeHandler } from 'react-hook-form';
import styles from './index.module.scss';

type Choice = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  name?: string;
  ref: RefCallBack;
  choices: Choice[];
};

const SelectField001 = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const { name = '', choices, onBlur, onChange } = props;

    const handleBlur = ({
      target,
      type,
    }: {
      target: HTMLSelectElement;
      type: string;
    }) => {
      console.log('handleBlur');
      console.log(target);
      console.log(type);

      void onBlur({ target, type });
    };

    const handleChange = ({
      target,
      type,
    }: {
      target: HTMLSelectElement;
      type: string;
    }) => {
      console.log('handleChange');
      console.log(target);
      console.log(type);

      void onChange({ target, type });
    };

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
