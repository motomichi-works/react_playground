import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';
import FieldHeading001, {
  FieldHeadingProps,
} from 'components/common/molecules/FieldHeading001';

import styles from './index.module.scss';

type Props = {
  field: JSX.Element;
  fieldHeadingProps: FieldHeadingProps;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
};

const FieldUnit001: React.FC<Props> = ({
  field,
  fieldHeadingProps,
  isVisibleErrorMessage,
  errorMessage,
}) => (
  <div className={styles.FieldUnit001}>
    <FieldHeading001 {...fieldHeadingProps} />
    {field}
    {isVisibleErrorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);

export default FieldUnit001;
