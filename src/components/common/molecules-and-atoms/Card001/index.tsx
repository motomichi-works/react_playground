import styles from './index.module.scss';

type Button = {
  label: string;
  handleClick: () => void;
};

type Props = {
  count: number;
  buttons: Button[];
};

const Card001: React.VFC<Props> = ({ count, buttons }) => (
  <div className={styles.Card001}>
    <div className={styles.NumberBoard}>{count}</div>
    <div className={styles.ButtonRow}>
      {buttons.map((button) => (
        <button
          key={button.label}
          type="button"
          className={styles.Button}
          onClick={button.handleClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  </div>
);

export default Card001;
