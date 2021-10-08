import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Footer: React.VFC = () => (
  <footer className={styles.Footer}>
    <div className={styles.CopyWrapper}>
      <Link className={styles.Copy} to="/">
        &copy;MotomichiWorks
      </Link>
    </div>
  </footer>
);

export default Footer;
