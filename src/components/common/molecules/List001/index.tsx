import styles from './index.module.scss';

export type Items = {
  tagName: 'div' | 'span' | `code` | 'pre';
  content: string;
}[][];

type Props = {
  items: Items;
};

const List001: React.FC<Props> = ({ items }) => (
  <ul className={styles.List001}>
    {items.map((ItemInnerElements) => (
      <li className={styles.Item} key={JSON.stringify(ItemInnerElements)}>
        {ItemInnerElements.map((element) => (
          <element.tagName>{element.content}</element.tagName>
        ))}
      </li>
    ))}
  </ul>
);

export default List001;
