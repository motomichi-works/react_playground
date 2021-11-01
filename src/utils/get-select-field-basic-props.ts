import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

// eslint-disable-next-line
const getSelectFieldBasicProps = ({
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
  const handleBlur = ({
    target,
    type,
  }: React.FocusEvent<HTMLSelectElement>) => {
    console.log('handleBlur');

    void onBlur({ target, type });
  };

  const handleChange = ({
    target,
    type,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('handleChange');

    void onChange({ target, type });
  };

  return {
    handleBlur,
    handleChange,
    ref,
    name,
  };
};

export default getSelectFieldBasicProps;
export type SelectFieldBasicProps = ReturnType<typeof getSelectFieldBasicProps>;
