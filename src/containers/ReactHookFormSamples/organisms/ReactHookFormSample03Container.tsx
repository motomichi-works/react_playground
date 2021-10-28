import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactHookFormSample03 from 'components/react-hook-form-samples/organisms/ReactHookFormSample03';

export interface IFormValues {
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

const ReactHookFormSample03Container: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line
  const onSubmit = (data: IFormValues) => console.log(data);

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample03 register={register} errors={errors} />
    </form>
  );
};

export default ReactHookFormSample03Container;
