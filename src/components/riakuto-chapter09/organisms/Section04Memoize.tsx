import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import MemoizeSampleContainer from 'containers/RiakutoChapter09/molecules/MemoizeSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const Section04Memoize: React.VFC = () => {
  const items: Items = [
    [{ tagName: 'div', content: 'useMemo()で値をメモ化できる。' }],
    [{ tagName: 'div', content: 'useCallback()で関数をメモ化できる。' }],
    [
      {
        tagName: 'div',
        content: 'メモ化した値をdependencies arrayの要素として渡す。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'useRef()で関数コンポーネントの外に値を保持できる。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-4. Hooksにおけるメモ化を理解する">
      <Frame001 headingText="タイマー">
        <MemoizeSampleContainer limit={60} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section04Memoize;
