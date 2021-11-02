import { useCallback, useEffect } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import { CheckboxFieldProps } from 'components/common/molecules/CheckboxField001';

function useRadioField<IFormValues>({
  nameProperty,
  defaultValue,
  value,
  label,
  register,
  setValue,
}: {
  nameProperty: Path<IFormValues>;
  defaultValue: UnpackNestedValue<PathValue<IFormValues, Path<IFormValues>>>;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
}): CheckboxFieldProps {
  const { onChange, ref, name } = { ...register(nameProperty) };

  const setDefaultValue = useCallback(() => {
    setValue(nameProperty, defaultValue);
  }, [setValue, nameProperty, defaultValue]);

  useEffect(() => {
    setDefaultValue();
  }, [setDefaultValue]);

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
    value,
    label,
  };
}

export default useRadioField;
