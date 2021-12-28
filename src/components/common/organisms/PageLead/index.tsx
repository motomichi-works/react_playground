import styles from './index.module.scss';

export type PageLeadItems = {
  tagName: 'div' | 'span' | 'code' | 'pre' | 'a';
  content: string;
  href?: string;
}[][];

type PageLeadProps = {
  pageLeadItems: PageLeadItems;
};

const PageLead: React.FC<PageLeadProps> = ({ pageLeadItems }) => (
  <ul className={styles.PageLead} data-adj="PageLead">
    {pageLeadItems.map((ItemInnerElements, i) => (
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

export default PageLead;
