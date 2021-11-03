import { useCallback } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { RadioFieldProps } from 'components/common/molecules/RadioField001';

function useRadioField<IFormValues>({
  nameProperty,
  register,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}): Pick<RadioFieldProps, 'handleBlur' | 'handleChange' | 'name' | 'ref'> {
  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const handleBlur = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      void onBlur({ target, type });
    },
    [onBlur],
  );

  const handleChange = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      void onChange({ target, type });
    },
    [onChange],
  );

  return {
    handleBlur,
    handleChange,
    ref,
    name,
  };
}

export default useRadioField;
