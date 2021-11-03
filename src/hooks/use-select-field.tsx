import { useCallback } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { SelectFieldProps } from 'components/common/molecules/SelectField001';

function useSelectField<IFormValues>({
  nameProperty,
  register,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}): Pick<SelectFieldProps, 'handleBlur' | 'handleChange' | 'name' | 'ref'> {
  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const handleBlur = useCallback(
    ({ target, type }: { target: HTMLSelectElement; type: string }) => {
      void onBlur({ target, type });
    },
    [onBlur],
  );

  const handleChange = useCallback(
    ({ target, type }: { target: HTMLSelectElement; type: string }) => {
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

export default useSelectField;
