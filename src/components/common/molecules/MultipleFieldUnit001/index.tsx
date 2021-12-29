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
  // NOTE: 表示するかしないかにかかわらず、エラーメッセージがあれば配列に格納します。
  const itemsErrorMessages: string[] = [];
  items.forEach((item) => {
    if (item.errorMessage !== undefined) {
      itemsErrorMessages.push(item.errorMessage);
    }
  });

  const combinationItemErrorMessages: string[] = [];
  if (combinationItem?.errorMessage !== undefined) {
    combinationItemErrorMessages.push(combinationItem.errorMessage);
  }

  // NOTE:
  // エラーメッセージを表示するかしないかのフラグです。
  // エラーメッセージはあっても、フィールドがtouchedでないと表示はしません。
  const isVisibleItemsErrorMessage = items.some(
    (item) => item.isVisibleErrorMessage,
  );
  const isVisibleCombinationItemErrorMessage =
    combinationItem?.isVisibleErrorMessage;
  const isVisibleErrorMessage =
    isVisibleItemsErrorMessage || isVisibleCombinationItemErrorMessage;

  return (
    <div
      className={styles.MultipleFieldUnit001}
      data-adj="MultipleFieldUnit001"
    >
      <div className={styles.MainContentsFrame}>
        <ul className={styles.Row}>
          {items.map((item, index) => {
            const key = `key${index}`;

            // TODO: htmlForの値をちゃんとする
            return (
              <div className={styles.Column} key={key}>
                {item.subHeading && (
                  <label className={styles.SubHeading} htmlFor="hoge">
                    {item.subHeading}
                  </label>
                )}
                <div className={styles.MainContents}>{item.field}</div>
              </div>
            );
          })}
        </ul>
        {descriptions && (
          <div className={styles.DescriptionsWrapper}>
            <ul>
              {descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isVisibleErrorMessage && (
        <div className={styles.ErrorMessageWrapper}>
          {items.map(
            (item) =>
              item.isVisibleErrorMessage && (
                <FieldErrorMessage
                  key={item.errorMessage}
                  message={item.errorMessage}
                />
              ),
          )}
          {isVisibleCombinationItemErrorMessage && (
            <FieldErrorMessage message={combinationItem?.errorMessage} />
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleFieldUnit001;
