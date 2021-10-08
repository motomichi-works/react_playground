import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.VFC = () => (
  <header className={styles.Header}>
    <div className={styles.Inner}>
      <div className={styles.LogoWrapper}>
        <Link className={styles.Logo} to="/">
          ロゴ
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
