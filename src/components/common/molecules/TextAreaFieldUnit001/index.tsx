import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';
import FieldHeading001, {
  FieldHeadingProps,
} from 'components/common/molecules/FieldHeading001';

import styles from './index.module.scss';

type Props = {
  fieldHeadingProps: FieldHeadingProps;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
};

const TextAreaFieldUnit001: React.FC<Props> = ({
  fieldHeadingProps,
  isVisibleErrorMessage,
  errorMessage,
  children,
}) => (
  <div className={styles.TextAreaFieldUnit001}>
    <FieldHeading001 {...fieldHeadingProps} />
    {children}
    {isVisibleErrorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);

export default TextAreaFieldUnit001;
