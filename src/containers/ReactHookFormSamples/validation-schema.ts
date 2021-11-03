import * as yup from 'yup';

const validationSchema = yup
  .object({
    lastName: yup.string().required('姓を入力してください。'),
    firstName: yup.string().required('名を入力してください。'),
    fullName: yup.string().max(20, '姓名は合計20文字以内で入力してください。'),
    age: yup.string().required('年齢を選択してください。'),
    radioSample: yup.string().required('ラジオサンプルを選択してください。'),
    checkboxSample: yup.string().matches(/on/, 'チェックしてください。'),
    textAreaSample: yup
      .string()
      .required('テキストエリアサンプルを入力してください。'),
  })
  .required();

export default validationSchema;

export const fieldNamesArray = [
  'firstName',
  'lastName',
  'fullName',
  'age',
  'radioSample',
  'checkboxSample',
  'textAreaSample',
] as const;
type FieldNamesArray = typeof fieldNamesArray;
type FieldNameStrings = FieldNamesArray[number];
export type FormValues = Record<FieldNameStrings, string>;
