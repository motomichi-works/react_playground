import styles from './index.module.scss';

type Button = {
  label: string;
  handleClick: () => void | undefined;
};

type Props = {
  count: number;
  buttons: Button[];
  modifierClassNames?: 'm_EmpasisColor'[];
};

const Card001: React.VFC<Props> = ({
  count,
  buttons,
  modifierClassNames = [],
}) => {
  const modifiers = modifierClassNames.map((key) => styles[key]);

  return (
    <div className={styles.Card001}>
      <div className={[styles.NumberBoard, ...modifiers].join(' ')}>
        {count}
      </div>
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
};

export default Card001;
