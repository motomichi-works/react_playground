import Footer from 'components/common/organisms/Footer';
import Header from 'components/common/organisms/Header';
import PageHeading from 'components/common/organisms/PageHeading';
import styles from './index.module.scss';

type Props = {
  pageHeadingText: string;
};

const Template001: React.FC<Props> = ({ children, pageHeadingText }) => (
  <div className={styles.Template001}>
    <Header />
    <div className={styles.PageHeadingWrapper}>
      <PageHeading text={pageHeadingText} />
    </div>
    <div className={styles.MainContentsWrapper}>{children}</div>
    <div className={styles.FooterWrapper}>
      <Footer />
    </div>
  </div>
);

export default Template001;
