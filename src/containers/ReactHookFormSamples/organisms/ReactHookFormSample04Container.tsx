import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  IFormValues,
} from 'containers/ReactHookFormSamples/validation-schema';
import getSelectFieldBasicProps from 'utils/get-select-field-basic-props';
import useTextLikeField from 'hooks/use-text-like-field';

// import useMyForm from 'containers/ReactHookFormSamples/use-my-form';
import ReactHookFormSample04 from 'components/react-hook-form-samples/organisms/ReactHookFormSample04';

const ReactHookFormSample04Container: React.VFC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormValues) => {
    // eslint-disable-next-line
    console.log(data);
  };

  const firstNameFieldProps = useTextLikeField<IFormValues>({
    nameProperty: 'firstName',
    defaultValue: '',
    register,
    setValue,
    staticOptions: {},
  });

  const ageFieldBasicProps = getSelectFieldBasicProps({
    ...register('age'),
  });

  const fieldProps = {
    firstName: firstNameFieldProps,
    age: {
      ...ageFieldBasicProps,
    },
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample04 errors={errors} fieldProps={fieldProps} />
    </form>
  );
};

export default ReactHookFormSample04Container;
