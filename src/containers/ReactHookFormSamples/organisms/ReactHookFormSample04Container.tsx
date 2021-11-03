import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  IFormValues,
} from 'containers/ReactHookFormSamples/validation-schema';
import useCheckboxField from 'hooks/use-checkbox-field';
import useCombinationField from 'hooks/use-combination-field';
import useRadioField from 'hooks/use-radio-field';
import useTextLikeField from 'hooks/use-text-like-field';
import useSelectField from 'hooks/use-select-field';

// import useMyForm from 'containers/ReactHookFormSamples/use-my-form';
import ReactHookFormSample04 from 'components/react-hook-form-samples/organisms/ReactHookFormSample04';

const ReactHookFormSample04Container: React.VFC = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      age: '',
      radioSample: '',
      checkboxSample: '',
    },
  });

  const onSubmit = (data: IFormValues) => {
    // eslint-disable-next-line
    console.log(data);
  };

  const fieldProps = {
    lastName: useTextLikeField<IFormValues>({
      nameProperty: 'lastName',
      register,
    }),
    firstName: useTextLikeField<IFormValues>({
      nameProperty: 'firstName',
      register,
    }),
    fullName: useCombinationField<IFormValues>({
      nameProperty: 'fullName',
      combinationFieldNames: ['lastName', 'firstName'],
      register,
      setValue,
      watch,
    }),
    age: useSelectField<IFormValues>({
      nameProperty: 'age',
      register,
    }),
    radioSample: useRadioField<IFormValues>({
      nameProperty: 'radioSample',
      register,
    }),
    checkboxSample: useCheckboxField<IFormValues>({
      nameProperty: 'checkboxSample',
      register,
    }),
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample04 errors={errors} fieldProps={fieldProps} />
    </form>
  );
};

export default ReactHookFormSample04Container;
