import React from 'react';
import { RefCallBack } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

type EventHandler = ({
  target,
  type,
}: {
  target: HTMLInputElement;
  type: string;
}) => void;

export type TextLikeFieldProps = {
  handleBlur: EventHandler;
  handleChange: EventHandler;
  handleComposition: ({
    target,
    type,
  }: {
    target: Partial<HTMLInputElement>;
    type: string;
  }) => void;
  name: string;
  ref: RefCallBack;
  typeProperty?: 'text' | 'tel';
  placeholder?: string;
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
};

const TextLikeField001 = React.forwardRef<HTMLInputElement, TextLikeFieldProps>(
  (props, ref) => {
    const {
      handleBlur,
      handleChange,
      handleComposition,
      name,
      typeProperty = 'text',
      leftIcon,
      rightIcon,
    } = props;

    return (
      <div className={styles.TextLikeField001}>
        {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
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
        {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
      </div>
    );
  },
);

export default TextLikeField001;
