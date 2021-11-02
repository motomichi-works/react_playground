import * as yup from 'yup';

const validationSchema = yup
  .object({
    lastName: yup.string().required('姓を入力してください。'),
    firstName: yup.string().required('名を入力してください。'),
    fullName: yup.string().max(20, '姓名は合計20文字以内で入力してください。'),
    age: yup.string().required('年齢を選択してください。'),
  })
  .required();

export default validationSchema;
export const fieldNamesArray = [
  'firstName',
  'lastName',
  'fullName',
  'age',
] as const;
export type FieldNamesArray = typeof fieldNamesArray;
export type FieldNameStrings = FieldNamesArray[number];
export type IFormValues = Record<FieldNameStrings, string>;
