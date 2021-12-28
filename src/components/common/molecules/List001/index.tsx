import styles from './index.module.scss';

export type Items = string[];

type Props = {
  items: Items;
};

const List001: React.FC<Props> = ({ items }) => (
  <ul className={styles.List001} data-adj="List001">
    {items.map((item, i) => (
      <li className={styles.Item} key={`${JSON.stringify(item)}${String(i)}`}>
        {item}
      </li>
    ))}
  </ul>
);

export default List001;
