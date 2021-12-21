import styles from './index.module.scss';

type Props = {
  text: string;
};

const FieldHeading001: React.FC<Props> = ({ text }) => (
  <div className={styles.FieldHeading001}>{text}</div>
);

export default FieldHeading001;
