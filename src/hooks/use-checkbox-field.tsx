import { useCallback } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { CheckboxFieldProps } from 'components/common/molecules/CheckboxField001';

function useCheckboxField<IFormValues>({
  nameProperty,
  register,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}): Pick<CheckboxFieldProps, 'handleChange' | 'name' | 'ref'> {
  const { onChange, ref, name } = { ...register(nameProperty) };

  const handleChange = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      void onChange({ target, type });
    },
    [onChange],
  );

  return {
    handleChange,
    ref,
    name,
  };
}

export default useCheckboxField;
