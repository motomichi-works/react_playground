import Badge001 from 'components/common/molecules/Badge001';
import styles from './index.module.scss';

export type FieldHeadingProps = {
  badgeType?: 'required' | undefined;
  text: string;
};

const FieldHeading001: React.FC<FieldHeadingProps> = ({ badgeType, text }) => {
  const badgeRender = (type: string | undefined) => {
    if (type === 'required') {
      return <Badge001 text="必須" />;
    }

    return <Badge001 text="任意" modifierClassNames={['m_BgColorGray']} />;
  };

  return (
    <div className={styles.FieldHeading001}>
      {badgeRender(badgeType)}
      <div className={styles.Text}>{text}</div>
    </div>
  );
};

export default FieldHeading001;
