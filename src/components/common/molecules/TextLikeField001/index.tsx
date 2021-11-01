import React, { CompositionEvent, FocusEvent, ChangeEvent } from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

type TextLikeFieldProps = {
  handleBlur: ({ target, type }: FocusEvent<HTMLInputElement>) => void;
  handleChange: ({ target, type }: ChangeEvent<HTMLInputElement>) => void;
  handleComposition: ({
    target,
    type,
  }: CompositionEvent<HTMLInputElement>) => void;
  name?: string;
  ref: RefCallBack;
  typeProperty?: 'text' | 'tel';
};

const TextLikeField001 = React.forwardRef<HTMLInputElement, TextLikeFieldProps>(
  (props, ref) => {
    const {
      handleBlur,
      handleChange,
      handleComposition,
      name = '',
      typeProperty = 'text',
    } = props;

    return (
      <div className={styles.TextLikeField001}>
        <input
          className={styles.Field}
          type={typeProperty}
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
