import React, { CompositionEvent } from 'react';
import { RefCallBack, ChangeHandler } from 'react-hook-form';
import styles from './index.module.scss';

export type TextLikeFieldProps = {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  name?: string;
  ref: RefCallBack;
  typeProperty?: 'text' | 'tel';
};

const TextLikeField001 = React.forwardRef<HTMLInputElement, TextLikeFieldProps>(
  (props, ref) => {
    const { typeProperty = 'text', name = '', onBlur, onChange } = props;

    const handleBlur = ({
      target,
      type,
    }: {
      target: HTMLInputElement;
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
      target: HTMLInputElement;
      type: string;
    }) => {
      console.log('handleChange');
      console.log(target);
      console.log(type);

      void onChange({ target, type });
    };

    const handleComposition = ({
      target,
      type,
    }: CompositionEvent<HTMLInputElement>) => {
      console.log('handleComposition');
      console.log(target);
      console.log(type);

      void onChange({ target, type });
    };

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
