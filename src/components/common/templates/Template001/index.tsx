import Footer from 'components/common/organisms/Footer';
import Header from 'components/common/organisms/Header';
import PageHeading from 'components/common/organisms/PageHeading';
import PageLead, { PageLeadItems } from 'components/common/organisms/PageLead';
import styles from './index.module.scss';

type Props = {
  pageHeadingText: string;
  pageLeadItems?: PageLeadItems;
};

const Template001: React.FC<Props> = ({
  children,
  pageHeadingText,
  pageLeadItems,
}) => (
  <div className={styles.Template001}>
    <Header />
    <div className={styles.PageHeadingWrapper}>
      <PageHeading text={pageHeadingText} />
      {pageLeadItems !== undefined && (
        <PageLead pageLeadItems={pageLeadItems} />
      )}
    </div>
    <div className={styles.MainContentsWrapper}>{children}</div>
    <div className={styles.FooterWrapper}>
      <Footer />
    </div>
  </div>
);

export default Template001;
