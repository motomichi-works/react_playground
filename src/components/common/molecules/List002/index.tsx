import styles from './index.module.scss';

export type Items = {
  tagName: 'div' | 'span' | `code` | 'pre';
  content: string;
}[][];

type Props = {
  items: Items;
};

const List002: React.FC<Props> = ({ items }) => (
  <ul className={styles.List002} data-adjacent-id="List002">
    {items.map((ItemInnerElements, i) => (
      <li
        className={styles.Item}
        key={`${JSON.stringify(ItemInnerElements)}${String(i)}`}
      >
        {ItemInnerElements.map((element, j) => (
          <element.tagName key={`${element.content}${String(i)}_${String(j)}`}>
            {element.content}
          </element.tagName>
        ))}
      </li>
    ))}
  </ul>
);

export default List002;
