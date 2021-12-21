import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';
import FieldHeading001 from 'components/common/molecules/FieldHeading001';
import TextAreaField001, {
  TextAreaFieldProps,
} from 'components/common/molecules/TextAreaField001';
import styles from './index.module.scss';

type Props = {
  headingText: string;
  textAreaFieldProps: TextAreaFieldProps;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
};

const TextAreaFieldUnit001: React.FC<Props> = ({
  headingText,
  textAreaFieldProps,
  isVisibleErrorMessage,
  errorMessage,
}) => (
  <div className={styles.TextAreaFieldUnit001}>
    <FieldHeading001 text={headingText} />
    <TextAreaField001 {...textAreaFieldProps} />
    {isVisibleErrorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);

export default TextAreaFieldUnit001;
