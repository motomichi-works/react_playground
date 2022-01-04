import { useEffect } from 'react';
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import { HiddenFieldProps } from 'components/common/molecules/HiddenField001';

function useCombinationField<IFormValues>({
  nameProperty,
  combinationFieldNames,
  watch,
  setValue,
  register,
}: {
  nameProperty: Path<IFormValues>;
  combinationFieldNames: Path<IFormValues>[];
  register: UseFormRegister<IFormValues>;
  watch: UseFormWatch<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
}): HiddenFieldProps {
  const { ref, name } = { ...register(nameProperty) };

  const fullNameKana = watch(combinationFieldNames);
  const joinedFullName = fullNameKana.join('') as UnpackNestedValue<
    PathValue<IFormValues, Path<IFormValues>>
  >;

  useEffect(() => {
    setValue(nameProperty, joinedFullName, { shouldValidate: true });
  }, [joinedFullName, nameProperty, setValue]);

  return {
    ref,
    name,
  };
}

export default useCombinationField;
