import FieldDescriptions, {
  FieldDescriptionItems,
} from 'components/common/molecules/FieldDescriptions001';
import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';

import styles from './index.module.scss';

type Props = {
  field: JSX.Element;
  isVisibleErrorMessage: boolean;
  errorMessage: string | undefined;
  fieldDescriptionItems?: FieldDescriptionItems;
};

const FieldUnit001: React.FC<Props> = ({
  field,
  isVisibleErrorMessage,
  errorMessage,
  fieldDescriptionItems,
}) => (
  <div className={styles.FieldUnit001} data-adj="FieldUnit001">
    <div className={styles.MainContentsFrame}>
      {field}
      {fieldDescriptionItems && (
        <div className={styles.DescriptionsWrapper}>
          <FieldDescriptions fieldDescriptionItems={fieldDescriptionItems} />
        </div>
      )}
    </div>
    {isVisibleErrorMessage && (
      <div className={styles.ErrorMessageWrapper}>
        <FieldErrorMessage message={errorMessage} />
      </div>
    )}
  </div>
);

export default FieldUnit001;
