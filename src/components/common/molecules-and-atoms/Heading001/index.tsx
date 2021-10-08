import styles from './index.module.scss';

type ModifierClassName = 'm_Lv3' | 'm_Lv4' | 'm_Lv5' | 'm_Lv6';
type Props = {
  text: string;
  modifierClassNames?: ModifierClassName[];
};

const Heading001: React.VFC<Props> = ({ text, modifierClassNames = [] }) => {
  const modifiers = modifierClassNames.map((key) => styles[key]);

  return (
    <h2 className={[styles.Heading001, ...modifiers].join(' ')}>{text}</h2>
  );
};

export default Heading001;
