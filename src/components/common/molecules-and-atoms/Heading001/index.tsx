import styles from './index.module.scss';

type Props = {
  text: string;
  modifierClassNames?: string[];
};

const Heading001: React.VFC<Props> = ({ text, modifierClassNames = [] }) => (
  <h2 className={[styles.Heading001, ...modifierClassNames].join(' ')}>
    {text}
  </h2>
);

export default Heading001;
