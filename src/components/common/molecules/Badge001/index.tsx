import styles from './index.module.scss';

type ModifierClassName = 'm_BgColorGray';
type Props = {
  modifierClassNames?: ModifierClassName[];
  text: string;
};

const Badge001: React.FC<Props> = ({ text, modifierClassNames = [] }) => {
  const modifiers = modifierClassNames.map((key) => styles[key]);

  return (
    <div className={[styles.Badge001, ...modifiers].join(' ')}>{text}</div>
  );
};

export default Badge001;
