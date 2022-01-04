import React from 'react';
import { RefCallBack } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
  isRed?: boolean;
};

const CheckboxField001 = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (props, ref) => {
    const { handleBlur, handleChange, name, value, label, isRed } = props;

    const modifiers: string[] = [];

    if (isRed) modifiers.push(styles.m_Red);

    return (
      <div className={[styles.CheckboxField001, ...modifiers].join(' ')}>
        <div className={styles.Item}>
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
          <div className={styles.IconWrapper}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      </div>
    );
  },
);

export default CheckboxField001;
