import { useCallback } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { CheckboxFieldProps } from 'components/common/molecules/CheckboxField001';

function useCheckboxField<IFormValues>({
  nameProperty,
  register,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}): Pick<CheckboxFieldProps, 'handleBlur' | 'handleChange' | 'name' | 'ref'> {
  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  // NOTE: blurイベント発火時にonBlurが実行されることによってtouchedFieldsが更新されるため、handleBlurも定義します。
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

export default useCheckboxField;
