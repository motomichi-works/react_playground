import Heading001 from 'components/common/molecules/Heading001';
import styles from './index.module.scss';

type Props = {
  sectionHeadingText: string;
};

const OrganismFrame001: React.FC<Props> = ({
  children,
  sectionHeadingText,
}) => (
  <section className={[styles.OrganismFrame001, 'OrganismFrame001'].join(' ')}>
    <div className={styles.HeadingWrapper}>
      <Heading001 text={sectionHeadingText} />
    </div>
    <div className={styles.Body}>{children}</div>
  </section>
);

export default OrganismFrame001;
