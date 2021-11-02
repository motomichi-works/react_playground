import { useCallback, useEffect } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import {
  SelectFieldProps,
  Choice,
} from 'components/common/molecules/SelectField001';

function useTextLikeField<IFormValues>({
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
    choices: Choice[];
  };
}): SelectFieldProps {
  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  // フィールドの初期値をセット
  const setDefaultValue = useCallback(() => {
    setValue(nameProperty, defaultValue);
  }, [setValue, nameProperty, defaultValue]);

  useEffect(() => {
    setDefaultValue();
  }, [setDefaultValue]);

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
    ...staticOptions,
  };
}

export default useTextLikeField;
