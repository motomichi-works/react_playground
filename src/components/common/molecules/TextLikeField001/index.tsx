import React from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

export type TextLikeFieldProps = {
  handleBlur: React.FocusEventHandler<HTMLInputElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleComposition: React.CompositionEventHandler<HTMLInputElement>;
  name: string;
  ref: RefCallBack;
  type: 'text' | 'tel';
};

const TextLikeField001 = React.forwardRef<HTMLInputElement, TextLikeFieldProps>(
  (props, ref) => {
    const { type, name, handleBlur, handleChange, handleComposition } = props;

    return (
      <div className={styles.TextLikeField001}>
        <input
          className={styles.Field}
          type={type}
          name={name}
          ref={ref}
          onBlur={handleBlur}
          onChange={handleChange}
          onCompositionEnd={handleComposition}
          onCompositionStart={handleComposition}
        />
      </div>
    );
  },
);

export default TextLikeField001;
