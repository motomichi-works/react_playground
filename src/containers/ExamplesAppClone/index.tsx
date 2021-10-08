import logo from 'images/logo.svg';
import styles from './index.module.scss';

const AppClone: React.VFC = () => (
  <div className={styles.AppClone}>
    <header className={styles.AppClone_Header}>
      <img src={logo} className={styles.AppClone_Logo} alt="logo" />
      <p>
        Edit <code>src/components/examples/app-clone/AppClone.tsx</code> and
        save to reload.
      </p>
      <a
        className={styles.AppClone_Link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default AppClone;
