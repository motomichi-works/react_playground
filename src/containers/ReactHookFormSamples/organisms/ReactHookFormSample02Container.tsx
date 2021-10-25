import { useForm, SubmitHandler } from 'react-hook-form';
import ReactHookFormSample02 from 'components/react-hook-form-samples/organisms/ReactHookFormSample02';

export interface IFormValues {
  'First Name': string;
  'Last Name': string;
  Age: number;
}

const ReactHookFormSample02Container: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line
    console.log(JSON.stringify(data));
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample02 register={register} errors={errors} />
    </form>
  );
};

export default ReactHookFormSample02Container;
