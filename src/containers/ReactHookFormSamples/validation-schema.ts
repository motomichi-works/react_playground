import * as yup from 'yup';

const validationSchema = yup
  .object({
    lastName: yup.string().required('姓は必須です。'),
    firstName: yup.string().required('名は必須です。'),
    age: yup.string().required('年齢は必須です。'),
  })
  .required();

export default validationSchema;
export const fieldNamesArray = ['firstName', 'lastName', 'age'] as const;
export type FieldNamesArray = typeof fieldNamesArray;
export type FieldNameStrings = FieldNamesArray[number];
export type IFormValues = Record<FieldNameStrings, string>;
