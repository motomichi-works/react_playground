import React, { CompositionEvent } from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './index.module.scss';

type EventHandler = ({
  target,
  type,
}: {
  target: HTMLTextAreaElement;
  type: string;
}) => void;

export type TextAreaFieldProps = {
  handleBlur: EventHandler;
  handleChange: EventHandler;
  handleComposition: ({
    target,
    type,
  }: CompositionEvent<HTMLTextAreaElement>) => void;
  name: string;
  ref: RefCallBack;
};

const TextAreaField001 = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>((props, ref) => {
  const { handleBlur, handleChange, handleComposition, name } = props;

  return (
    <div className={styles.TextAreaField001} data-adj="TextAreaField001">
      <textarea
        className={styles.Field}
        name={name}
        ref={ref}
        onBlur={handleBlur}
        onChange={handleChange}
        onCompositionEnd={handleComposition}
        onCompositionStart={handleComposition}
      />
    </div>
  );
});

export default TextAreaField001;
