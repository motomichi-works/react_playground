import * as yup from 'yup';

const validationSchema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.string().required(),
  })
  .required();

export default validationSchema;
export const fieldNamesArray = ['firstName', 'age'] as const;
export type FieldNamesArray = typeof fieldNamesArray;
export type FieldNameStrings = FieldNamesArray[number];
export type IFormValues = Record<FieldNameStrings, string>;
