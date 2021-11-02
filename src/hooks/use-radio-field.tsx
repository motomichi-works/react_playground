import { useCallback, useEffect } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import { RadioFieldProps } from 'components/common/molecules/RadioField001';

function useRadioField<IFormValues>({
  nameProperty,
  defaultValue,
  register,
  setValue,
  staticOptions,
}: {
  nameProperty: Path<IFormValues>;
  defaultValue: UnpackNestedValue<PathValue<IFormValues, Path<IFormValues>>>;
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
  staticOptions: {
    choices: RadioFieldProps['choices'];
  };
}): RadioFieldProps {
  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const setDefaultValue = useCallback(() => {
    setValue(nameProperty, defaultValue);
  }, [setValue, nameProperty, defaultValue]);

  useEffect(() => {
    setDefaultValue();
  }, [setDefaultValue]);

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
    ...staticOptions,
  };
}

export default useRadioField;
