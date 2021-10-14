import { Link } from 'react-router-dom';
import paths from 'settings/paths';
import styles from './index.module.scss';

const Nav001: React.VFC = () => (
  <ul className={styles.Nav001}>
    {Object.keys(paths).map((strKey) => {
      type Key = keyof typeof paths;
      const key = strKey as Key;

      return (
        <li key={key} className={styles.Item}>
          <Link to={paths[key]}>{key}</Link>
        </li>
      );
    })}
  </ul>
);

export default Nav001;
