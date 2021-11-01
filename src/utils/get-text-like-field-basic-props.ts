import React from 'react';
import { ChangeHandler } from 'react-hook-form';

// eslint-disable-next-line
const getTextLikeFieldBasicProps = ({
  onBlur,
  onChange,
}: {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
}) => {
  const handleBlur = ({ target, type }: React.FocusEvent<HTMLInputElement>) => {
    console.log('handleBlur');

    void onBlur({ target, type });
  };

  const handleChange = ({
    target,
    type,
  }: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange');

    void onChange({ target, type });
  };

  const handleComposition = ({
    target,
    type,
  }: React.CompositionEvent<HTMLInputElement>) => {
    console.log('handleComposition');

    void onChange({ target, type });
  };

  return {
    handleBlur,
    handleChange,
    handleComposition,
  };
};

export default getTextLikeFieldBasicProps;
export type TextLikeFieldBasicProps = ReturnType<
  typeof getTextLikeFieldBasicProps
>;
