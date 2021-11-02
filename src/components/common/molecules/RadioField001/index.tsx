import React from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

export type Choice = {
  label: string;
  value: string;
};

type EventHandler = ({
  target,
  type,
}: {
  target: HTMLInputElement;
  type: string;
}) => void;

export type RadioFieldProps = {
  handleBlur: EventHandler;
  handleChange: EventHandler;
  name: string;
  choices: Choice[];
  ref: RefCallBack;
};

const RadioField001 = React.forwardRef<HTMLInputElement, RadioFieldProps>(
  (props, ref) => {
    const { handleBlur, handleChange, name, choices } = props;

    return (
      <div className={styles.RadioField001}>
        {choices.map((choice) => (
          <div key={`${name}_${choice.value}`} className={styles.Item}>
            <input
              id={`${name}_${choice.value}`}
              className={styles.Field}
              type="radio"
              name={name}
              value={choice.value}
              ref={ref}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label className={styles.Label} htmlFor={`${name}_${choice.value}`}>
              {choice.label}
            </label>
          </div>
        ))}
      </div>
    );
  },
);

export default RadioField001;
