import styles from './index.module.scss';

export type FieldHeadingProps = {
  badgeType?: 'required' | undefined;
  text: string;
};

const FieldHeading001: React.FC<FieldHeadingProps> = ({ badgeType, text }) => (
  <div className={styles.FieldHeading001}>
    {badgeType === 'required' && <span>必須</span>}
    <span className={styles.TextWrapper}>{text}</span>
  </div>
);

export default FieldHeading001;
