import { Path, UseFormRegister } from 'react-hook-form';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';

function getTextLikeFieldProps<T>(
  name: string,
  register: UseFormRegister<T>,
): TextLikeFieldProps {
  const path = name as Path<T>;
  const registerReturn = { ...register(path) };

  return {
    handleBlur: ({ target, type }) => {
      void registerReturn.onBlur({ target, type });
    },
    handleChange: ({ target, type }) => {
      void registerReturn.onChange({ target, type });
    },
    handleComposition: ({ target, type }) => {
      void registerReturn.onChange({ target, type });
    },
    name: registerReturn.name,
    ref: registerReturn.ref,
    type: 'text',
  };
}

export default getTextLikeFieldProps;
