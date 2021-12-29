import styles from './index.module.scss';

export type FieldDescriptionItems = {
  tagName: 'div' | 'span' | 'code' | 'pre' | 'a';
  content: string;
  href?: string;
}[][];

type Props = {
  fieldDescriptionItems: FieldDescriptionItems;
};

const FieldDescriptions001: React.FC<Props> = ({ fieldDescriptionItems }) => (
  <ul className={styles.FieldDescriptions001} data-adj="FieldDescriptions001">
    {fieldDescriptionItems.map((ItemInnerElements, i) => (
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

export default FieldDescriptions001;
