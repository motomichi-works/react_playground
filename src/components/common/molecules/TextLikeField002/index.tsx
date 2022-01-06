import { useRef, useCallback } from 'react';
import styles from './index.module.scss';

export type TextLikeField002Props = {
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
};

const TextLikeField002: React.VFC<TextLikeField002Props> = ({
  name,
  type,
  placeholder,
  value,
  setValue,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const isComposing = useRef(false);

  const handleChange = useCallback(() => {
    if (!inputEl) return;
    if (!inputEl.current) return;

    setValue(inputEl.current.value);
  }, [setValue]);

  const handleComposition = useCallback(({ type: eventType }) => {
    if (!inputEl) return;
    if (!inputEl.current) return;

    if (eventType === 'compositionstart') isComposing.current = true;
    if (eventType === 'compositionend') isComposing.current = false;

    // `isComposing.current === true`の場合はIME入力途中なので、何もせずreturnします。
    if (isComposing.current === true) return;

    // IME確定したときに実行されます。
    if (eventType === 'compositionend') {
      // やるとしたらここでバリデーションとエラーメッセージの更新をします。
      console.log('IME確定されました。');
    }
  }, []);

  return (
    <div className={styles.TextLikeField002}>
      <input
        className={styles.Field}
        name={name}
        placeholder={placeholder}
        ref={inputEl}
        type={type}
        onChange={handleChange}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
        value={value}
      />
    </div>
  );
};

export default TextLikeField002;
