import styles from './index.module.scss';

export type Items = {
  tagName: 'div' | 'span' | 'code' | 'pre' | 'a';
  content: string;
  href?: string;
}[][];

type Props = {
  items: Items;
};

const List002: React.FC<Props> = ({ items }) => (
  <ul className={styles.List002} data-adj="List002">
    {items.map((ItemInnerElements, i) => (
      <li
        className={styles.Item}
        key={`${JSON.stringify(ItemInnerElements)}${String(i)}`}
      >
        {ItemInnerElements.map((element, j) => (
          <element.tagName
            key={`${element.content}${String(i)}_${String(j)}`}
            href={element.href ?? undefined}
            target={element.href?.includes('http') ? '_blank' : undefined}
            rel={element.href?.includes('http') ? 'noopener' : undefined}
          >
            {element.content}
          </element.tagName>
        ))}
      </li>
    ))}
  </ul>
);

export default List002;
