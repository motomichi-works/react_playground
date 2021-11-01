import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

// eslint-disable-next-line
const getTextLikeFieldBasicProps = ({
  onBlur,
  onChange,
  ref,
  name,
}: {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  ref: RefCallBack;
  name: string;
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
    ref,
    name,
  };
};

export default getTextLikeFieldBasicProps;
export type TextLikeFieldBasicProps = ReturnType<
  typeof getTextLikeFieldBasicProps
>;
