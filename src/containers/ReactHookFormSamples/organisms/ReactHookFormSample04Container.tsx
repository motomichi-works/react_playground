import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  FormValues,
} from 'containers/ReactHookFormSamples/validation-schema';
import useCheckboxField from 'hooks/use-checkbox-field';
import useCombinationField from 'hooks/use-combination-field';
import useRadioField from 'hooks/use-radio-field';
import useTextAreaField from 'hooks/use-text-area-field';
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
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      lastNameKana: '',
      firstNameKana: '',
      selectSample: '',
      radioSample: '',
      checkboxSample: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line
    console.log(data);
  };

  const fieldProps = {
    lastNameKana: useTextLikeField<FormValues>({
      nameProperty: 'lastNameKana',
      register,
    }),
    firstNameKana: useTextLikeField<FormValues>({
      nameProperty: 'firstNameKana',
      register,
    }),
    fullName: useCombinationField<FormValues>({
      nameProperty: 'fullName',
      combinationFieldNames: ['lastNameKana', 'firstNameKana'],
      register,
      setValue,
      watch,
    }),
    selectSample: useSelectField<FormValues>({
      nameProperty: 'selectSample',
      register,
    }),
    radioSample: useRadioField<FormValues>({
      nameProperty: 'radioSample',
      register,
    }),
    checkboxSample: useCheckboxField<FormValues>({
      nameProperty: 'checkboxSample',
      register,
    }),
    textAreaSample: useTextAreaField<FormValues>({
      nameProperty: 'textAreaSample',
      register,
    }),
  };

  return (
    <form className="u-MT64" onSubmit={handleSubmit(onSubmit)}>
      <ReactHookFormSample04
        errors={errors}
        touchedFields={touchedFields}
        fieldProps={fieldProps}
      />
    </form>
  );
};

export default ReactHookFormSample04Container;
