import styles from './index.module.scss';

export type FieldHeadingProps = {
  text: string;
};

const FieldHeading001: React.FC<FieldHeadingProps> = ({ text }) => (
  <div className={styles.FieldHeading001}>{text}</div>
);

export default FieldHeading001;
