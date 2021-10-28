import useMyForm from 'containers/ReactHookFormSamples/use-my-form';
import ReactHookFormSample04 from 'components/react-hook-form-samples/organisms/ReactHookFormSample04';

const ReactHookFormSample04Container: React.VFC = () => {
  const { fieldPropsObj, errors, handleSubmit } = useMyForm();

  return (
    <form className="u-MT64" onSubmit={handleSubmit}>
      <ReactHookFormSample04 fieldPropsObj={fieldPropsObj} errors={errors} />
    </form>
  );
};

export default ReactHookFormSample04Container;
