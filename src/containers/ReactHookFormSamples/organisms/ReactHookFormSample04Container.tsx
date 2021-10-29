import useMyForm from 'containers/ReactHookFormSamples/use-my-form';
import ReactHookFormSample04 from 'components/react-hook-form-samples/organisms/ReactHookFormSample04';

const ReactHookFormSample04Container: React.VFC = () => {
  // fieldNameを定義
  const fieldNamesArr = ['firstName', 'age'] as const;

  // validataionの設定
  const { fieldPropsObj, errors, handleSubmit } = useMyForm(fieldNamesArr);
  const onSubmit = (data: Record<typeof fieldNamesArr[number], string>) => {
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample04 fieldPropsObj={fieldPropsObj} errors={errors} />
    </form>
  );
};

export default ReactHookFormSample04Container;
