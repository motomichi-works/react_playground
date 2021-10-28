import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  IFormValues,
} from 'containers/ReactHookFormSamples/validation-schema';
import getTextLikeFieldProps from 'utils/get-text-like-field-props';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';

const useMyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const fieldPropsObj: {
    firstName: TextLikeFieldProps;
    age: TextLikeFieldProps;
  } = {
    firstName: getTextLikeFieldProps<IFormValues>('firstName', register),
    age: getTextLikeFieldProps<IFormValues>('age', register),
  };

  const onSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return {
    fieldPropsObj,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useMyForm;
