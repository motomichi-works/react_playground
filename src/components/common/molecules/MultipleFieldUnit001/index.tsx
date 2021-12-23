import FieldErrorMessage from 'components/common/molecules/FieldErrorMessage';

import styles from './index.module.scss';

type Item = {
  field: JSX.Element;
  subHeading?: string;
  isVisibleErrorMessage?: boolean;
  errorMessage?: string;
};

type Props = {
  items: Item[];
  combinationItem?: {
    field: JSX.Element;
    isVisibleErrorMessage?: boolean;
    errorMessage?: string;
  };
  descriptions?: string[];
};

const MultipleFieldUnit001: React.FC<Props> = ({
  items,
  combinationItem,
  descriptions,
}) => {
  // NOTE: エラーメッセージはあっても、フィールドがtouchedでないと表示はしません。
  const isVisibleItemsErrorMessage = items.some(
    (item) => item.isVisibleErrorMessage,
  );
  const isVisibleCombinationItemErrorMessage =
    combinationItem?.isVisibleErrorMessage;
  const isVisibleErrorMessage =
    isVisibleItemsErrorMessage || isVisibleCombinationItemErrorMessage;

  // NOTE: 表示するかしないかにかかわらず配列に格納します。
  const itemsErrorMessages = isVisibleItemsErrorMessage
    ? items.map((item) => item.errorMessage)
    : [];
  const combinationItemErrorMessages = isVisibleCombinationItemErrorMessage
    ? [combinationItem?.errorMessage]
    : [];

  return (
    <div
      className={styles.MultipleFieldUnit001}
      data-adj="MultipleFieldUnit001"
    >
      <ul className={styles.Row}>
        {items.map((item) => (
          <div className={styles.Column}>
            <label className={styles.SubHeading} htmlFor="hoge">
              {item.subHeading}
            </label>
            <div className={styles.MainContents}>{item.field}</div>
          </div>
        ))}
      </ul>
      {descriptions && (
        <div className={styles.DescriptionsWrapper}>
          <ul>
            {descriptions.map((description) => (
              <li>{description}</li>
            ))}
          </ul>
        </div>
      )}
      {isVisibleErrorMessage && (
        <ul>
          {isVisibleItemsErrorMessage &&
            itemsErrorMessages.map((message) => (
              <li>
                <FieldErrorMessage message={message} />
              </li>
            ))}
          {isVisibleCombinationItemErrorMessage &&
            combinationItemErrorMessages.map((message) => (
              <li>
                <FieldErrorMessage message={message} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MultipleFieldUnit001;
