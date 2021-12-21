import * as yup from 'yup';

const REG_EXP_ZENKAKU_KATAKANA = new RegExp(
  '[アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンヴガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュョヮヵヶー 　]',
);

const validationSchema = yup
  .object({
    lastNameKana: yup
      .string()
      .required('姓(カナ)を入力してください。')
      .matches(REG_EXP_ZENKAKU_KATAKANA, {
        message: '姓(カナ)は全角カタカナで入力してください。',
      }),
    firstNameKana: yup
      .string()
      .required('名(カナ)を入力してください。')
      .matches(REG_EXP_ZENKAKU_KATAKANA, {
        message: '名(カナ)は全角カタカナで入力してください。',
      }),
    fullName: yup
      .string()
      .max(20, '姓(カナ)と名(カナ)は合計20文字以内で入力してください。'),
    selectSample: yup.string().required('セレクトサンプルを選択してください。'),
    radioSample: yup.string().required('ラジオサンプルを選択してください。'),
    checkboxSample: yup
      .string()
      .matches(/on/, 'チェックボックスサンプルをチェックしてください。'),
    textAreaSample: yup
      .string()
      .required('テキストエリアサンプルを入力してください。'),
  })
  .required();

export default validationSchema;

export const fieldNamesArray = [
  'firstNameKana',
  'lastNameKana',
  'fullName',
  'selectSample',
  'radioSample',
  'checkboxSample',
  'textAreaSample',
] as const;
type FieldNamesArray = typeof fieldNamesArray;
export type FieldNameStrings = FieldNamesArray[number];
export type FormValues = Record<FieldNameStrings, string>;
