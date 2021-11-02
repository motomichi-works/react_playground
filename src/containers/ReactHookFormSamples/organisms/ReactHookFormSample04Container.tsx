import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  IFormValues,
} from 'containers/ReactHookFormSamples/validation-schema';
import useTextLikeField from 'hooks/use-text-like-field';
import useSelectField from 'hooks/use-select-field';

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

  const fieldProps = {
    lastName: useTextLikeField<IFormValues>({
      nameProperty: 'lastName',
      defaultValue: '',
      register,
      setValue,
      staticOptions: {},
    }),
    firstName: useTextLikeField<IFormValues>({
      nameProperty: 'firstName',
      defaultValue: '',
      register,
      setValue,
      staticOptions: {},
    }),
    age: useSelectField<IFormValues>({
      nameProperty: 'age',
      defaultValue: '',
      register,
      setValue,
      staticOptions: {
        choices: [
          { label: '選択してください', value: '' },
          { label: 'Selectタグ選択肢1', value: 'selectTagChoice1' },
          { label: 'Selectタグ選択肢2', value: 'selectTagChoice2' },
        ],
      },
    }),
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample04 errors={errors} fieldProps={fieldProps} />
    </form>
  );
};

export default ReactHookFormSample04Container;
