import styles from './index.module.scss';

type Props = {
  text: string;
};

const PageHeading: React.VFC<Props> = ({ text }) => (
  <h1 className={styles.PageHeading}>{text}</h1>
);

export default PageHeading;
