import { Path, UseFormRegister } from 'react-hook-form';
import { TextLikeFieldProps } from 'components/common/molecules/TextLikeField001';

function getTextLikeFieldProps<T>(
  name: Path<T>,
  register: UseFormRegister<T>,
): TextLikeFieldProps {
  const registerReturn = { ...register(name) };

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
