import React from 'react';
import styles from './index.module.scss';

type Props = {
  type: 'text' | 'tel';
  name: string;
  handleBlur: ({
    target,
    type,
  }: {
    target: HTMLInputElement;
    type: string;
  }) => void;
};

const TextLikeField001 = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { type, name, handleBlur } = props;

    return (
      <div className={styles.TextLikeField001}>
        <input
          className={styles.Field}
          type={type}
          name={name}
          ref={ref}
          onBlur={handleBlur}
        />
      </div>
    );
  },
);

export default TextLikeField001;
