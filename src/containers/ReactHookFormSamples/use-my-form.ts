import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from 'containers/ReactHookFormSamples/validation-schema';
import getTextLikeFieldProps from 'utils/get-text-like-field-props';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';
import makeObjFromReadonlyArray from 'utils/make-obj-from-readonly-array';

type FieldNamesArr<T extends string> = readonly T[];

// Desc: 戻り値の型は明示しなくても適切に型推論されるのでeslintのwarningを無効化しています。
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useMyForm<FieldNameStrings extends string>(
  fieldNamesArr: FieldNamesArr<FieldNameStrings>,
) {
  type FormValues = Record<FieldNameStrings, string>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const fieldPropsObj = makeObjFromReadonlyArray(
    fieldNamesArr,
    {} as TextLikeFieldProps,
  );

  for (let i = 0; i < fieldNamesArr.length; i += 1) {
    const fieldName = fieldNamesArr[i];

    fieldPropsObj[fieldName] = getTextLikeFieldProps<FormValues>(
      fieldName,
      register,
    );
  }

  return {
    fieldPropsObj,
    errors,
    handleSubmit,
  };
}

export default useMyForm;
