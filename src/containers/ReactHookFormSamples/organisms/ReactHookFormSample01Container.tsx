import ReactHookFormSample01 from 'components/react-hook-form-samples/organisms/ReactHookFormSample01';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const onSubmit: SubmitHandler<Inputs> = (data) => {
  // eslint-disable-next-line
  console.log(data);
};

const ReactHookFormSample01Container: React.VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // eslint-disable-next-line
  console.log('watch example: ', watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample01
        exampleField={{
          registerReturn: { ...register('example') },
          errors: errors.example,
        }}
        exampleRequiredField={{
          registerReturn: {
            ...register('exampleRequired', { required: true }),
          },
          errors: errors.exampleRequired,
        }}
      />
    </form>
  );
};

export default ReactHookFormSample01Container;
