import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';
import FieldHeading001, {
  FieldHeadingProps,
} from 'components/common/molecules/FieldHeading001';
import TextAreaField001, {
  TextAreaFieldProps,
} from 'components/common/molecules/TextAreaField001';
import styles from './index.module.scss';

type Props = {
  fieldHeadingProps: FieldHeadingProps;
  textAreaFieldProps: TextAreaFieldProps;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
};

const TextAreaFieldUnit001: React.FC<Props> = ({
  fieldHeadingProps,
  textAreaFieldProps,
  isVisibleErrorMessage,
  errorMessage,
}) => (
  <div className={styles.TextAreaFieldUnit001}>
    <FieldHeading001 {...fieldHeadingProps} />
    <TextAreaField001 {...textAreaFieldProps} />
    {isVisibleErrorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);

export default TextAreaFieldUnit001;
