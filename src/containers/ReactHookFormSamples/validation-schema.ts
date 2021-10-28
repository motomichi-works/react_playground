import * as yup from 'yup';

const validationSchema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.string().required(),
  })
  .required();

export default validationSchema;

export interface IFormValues {
  firstName: string;
  age: string;
}
