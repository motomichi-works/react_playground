import styles from './index.module.scss';

export type Items = {
  tagName: 'div' | 'span';
  content: string;
}[][];

type Props = {
  items: Items;
};

const List001: React.FC<Props> = ({ items }) => (
  <ul className={styles.List001}>
    {items.map((ItemInnerElements) => (
      <li className={styles.Item}>
        {ItemInnerElements.map((element) => (
          <element.tagName>{element.content}</element.tagName>
        ))}
      </li>
    ))}
  </ul>
);

export default List001;
