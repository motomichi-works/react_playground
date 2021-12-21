import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';

import styles from './index.module.scss';

type Props = {
  field: JSX.Element;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
};

const FieldUnit001: React.FC<Props> = ({
  field,
  isVisibleErrorMessage,
  errorMessage,
}) => (
  <div className={styles.FieldUnit001} data-adj="FieldUnit001">
    {field}
    {isVisibleErrorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);

export default FieldUnit001;
