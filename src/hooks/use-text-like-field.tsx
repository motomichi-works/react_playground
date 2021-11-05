import { useRef, useCallback, CompositionEvent } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';

type Converter = (str: string) => string;

function useTextLikeField<IFormValues>({
  nameProperty,
  register,
  converters,
}: {
  nameProperty: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  converters?: Converter[];
}): TextLikeFieldProps {
  const isComposing = useRef<boolean>();

  const { onBlur, onChange, ref, name } = { ...register(nameProperty) };

  const handleBlur = useCallback(
    ({ target, type }: { target: HTMLInputElement; type: string }) => {
      let { value } = target;

      if (converters) {
        for (let i = 0; i < converters.length; i += 1) {
          value = converters[i](value);
        }
      }

      // eslint-disable-next-line no-param-reassign
      target.value = value;

      void onBlur({ target, type });
    },
    [onBlur, converters],
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
    (event: CompositionEvent<HTMLInputElement>) => {
      console.log('handleComposition: ', event);

      if (event.type === 'compositionstart') isComposing.current = true;
      if (event.type === 'compositionend') isComposing.current = false;

      if (isComposing.current === true) return;
      if (event.type !== 'compositionend') return;

      // ここでfieldValueの加工や、stateの更新をします。
      void onChange(event);
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

export default useTextLikeField;
