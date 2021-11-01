import React from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

export type SelectFieldProps = {
  handleBlur: React.FocusEventHandler<HTMLSelectElement>;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
  name: string;
  ref: RefCallBack;
};

const SelectField001 = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const { handleBlur, handleChange, name } = props;

    return (
      <div className={styles.SelectField001}>
        <select
          className={styles.Field}
          name={name}
          ref={ref}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    );
  },
);

export default SelectField001;
