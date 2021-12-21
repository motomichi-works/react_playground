import Badge001 from 'components/common/molecules/Badge001';
import styles from './index.module.scss';

export type FieldHeadingProps = {
  badgeType?: 'required' | undefined;
  text: string;
};

const FieldHeading001: React.FC<FieldHeadingProps> = ({ badgeType, text }) => {
  const badgeRender = (type: string | undefined) => {
    if (type === 'required') {
      return (
        <div className={styles.BadgeWrapper} data-adj="BadgeWrapper">
          <Badge001 text="必須" />
        </div>
      );
    }

    return (
      <div className={styles.BadgeWrapper} data-adj="BadgeWrapper">
        <Badge001 text="任意" modifierClassNames={['m_BgColorGray']} />
      </div>
    );
  };

  return (
    <div className={styles.FieldHeading001} data-adj="FieldHeading001">
      {badgeRender(badgeType)}
      <div className={styles.Text} data-adj="Text">
        {text}
      </div>
    </div>
  );
};

export default FieldHeading001;
