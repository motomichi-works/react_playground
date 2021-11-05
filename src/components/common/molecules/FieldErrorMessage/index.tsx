import styles from './index.module.scss';

type Props = {
  message: string | undefined;
};

const FieldErrorMessage: React.FC<Props> = ({ message }) => (
  <p className={styles.FieldErrorMessage}>{message}</p>
);

export default FieldErrorMessage;
