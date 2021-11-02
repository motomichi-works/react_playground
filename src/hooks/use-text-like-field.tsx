import { useRef, useCallback, useEffect, CompositionEvent } from 'react';
import {
  UseFormRegister,
  UseFormSetValue,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';

function useTextLikeField<IFormValues>({
  nameProperty,
  defaultValue,
  register,
  setValue,
  staticOptions,
}: {
  nameProperty: Path<IFormValues>;
  defaultValue: UnpackNestedValue<PathValue<IFormValues, Path<IFormValues>>>;
  register: UseFormRegister<IFormValues>;
  setValue: UseFormSetValue<IFormValues>;
  staticOptions: {
    placeholder?: string;
  };
}): TextLikeFieldProps {
  const isComposing = useRef<boolean>();

  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const setDefaultValue = useCallback(() => {
    setValue(nameProperty, defaultValue);
  }, [setValue, nameProperty, defaultValue]);

  useEffect(() => {
    setDefaultValue();
  }, [setDefaultValue]);

  const handleBlur = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      // ここでfieldValueの加工や、stateの更新をします。
      void onBlur({ target, type });
    },
    [onBlur],
  );

  const handleChange = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      // `isComposing.current === true`の場合はIME入力途中なので、何もせずreturnします。
      if (isComposing.current === true) return;

      // IMEを伴わない半角入力や文字削除などをしたときに実行されます。
      // ここでfieldValueの加工や、stateの更新をします。
      void onChange({ target, type });
    },
    [onChange],
  );

  const handleComposition = useCallback(
    ({ target, type }: CompositionEvent<HTMLInputElement>) => {
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
    ...staticOptions,
  };
}

export default useTextLikeField;
