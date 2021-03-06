import { useRef, useCallback, CompositionEvent } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { TextAreaFieldProps } from 'components/common/molecules/TextAreaField001';

function useTextAreaField<IFormValues>({
  nameProperty,
  register,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}): TextAreaFieldProps {
  const isComposing = useRef<boolean>();

  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const handleBlur = useCallback(
    ({ target, type }: { target: HTMLTextAreaElement; type: string }) => {
      // ここでfieldValueの加工や、stateの更新をします。
      void onBlur({ target, type });
    },
    [onBlur],
  );

  const handleChange = useCallback(
    ({ target, type }: { target: HTMLTextAreaElement; type: string }) => {
      // `isComposing.current === true`の場合はIME入力途中なので、何もせずreturnします。
      if (isComposing.current === true) return;

      // IMEを伴わない半角入力や文字削除などをしたときに実行されます。
      // ここでfieldValueの加工や、stateの更新をします。
      void onChange({ target, type });
    },
    [onChange],
  );

  const handleComposition = useCallback(
    ({ target, type }: CompositionEvent<HTMLTextAreaElement>) => {
      if (type === 'compositionstart') isComposing.current = true;
      if (type === 'compositionend') isComposing.current = false;

      if (isComposing.current === true) return;
      if (type !== 'compositionend') return;

      // ここでfieldValueの加工や、stateの更新をします。
      void onChange({ target, type });
    },
    [onChange],
  );

  return {
    handleBlur,
    handleChange,
    handleComposition,
    ref,
    name,
  };
}

export default useTextAreaField;
