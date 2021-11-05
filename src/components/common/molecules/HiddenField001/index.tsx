import React from 'react';
import { RefCallBack } from 'react-hook-form';

export type HiddenFieldProps = {
  name: string;
  ref: RefCallBack;
};

const HiddenField001 = React.forwardRef<HTMLInputElement, HiddenFieldProps>(
  (props, ref) => {
    const { name } = props;

    return <input type="hidden" name={name} ref={ref} />;
  },
);

export default HiddenField001;
