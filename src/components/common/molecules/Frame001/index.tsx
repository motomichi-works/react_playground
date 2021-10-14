import Heading001 from 'components/common/molecules/Heading001';
import styles from './index.module.scss';

type Props = {
  headingText: string;
};

const Frame001: React.FC<Props> = ({ children, headingText }) => (
  <div className={styles.Frame001}>
    <div className={styles.HeadingWrapper}>
      <Heading001 text={headingText} modifierClassNames={['m_Lv3']} />
    </div>
    <div className={styles.MainContentsWrapper}>{children}</div>
  </div>
);

export default Frame001;
