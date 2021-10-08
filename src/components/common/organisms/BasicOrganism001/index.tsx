import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

type Props = {
  sectionHeadingText: string;
};

const BasicOrganism001: React.FC<Props> = ({
  children,
  sectionHeadingText,
}) => (
  <section className={styles.BasicOrganism001}>
    <div className={styles.HeadingWrapper}>
      <Heading001 text={sectionHeadingText} />
    </div>
    <div className={styles.Body}>{children}</div>
  </section>
);

export default BasicOrganism001;
