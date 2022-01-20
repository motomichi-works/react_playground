import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import MemoizeSampleContainer from 'containers/RiakutoChapter09/molecules/MemoizeSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';

const Section04Memoize: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content:
          'useMemo()で値をメモ化できます。メモ化した値はコンポーネントの外に保存されます。useMemo()の第二引数に渡したdependencies arrayの値が変化したときだけ、第一引数に渡した処理が実行されます。Vue.jsでいうcomputedのような使い方をします。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'useCallback()で関数をメモ化できます。関数は値が同じなら同一のものとみなされるプリミティブ型の変数と違って、内容が同じでも定義ごとにメモリ上のアドレスが異なるため、特にdependencies arrayに関数を渡す場合には、useCallback()で関数をメモ化してから渡します。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'dependencies arrayに関数を渡す場合には、useCallback()で関数をメモ化してから渡します。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'useRef()で関数コンポーネントの外に値を保持できる。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'useRef()の戻り値を、DOMのref属性に渡すことで、任意のリアルDOMを参照できるようになります。サンプルコードは書籍「りあクト！」の193ページ「9-4.Hooksにおけるメモ化を理解する」を参照してください。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'サンプルコードはsrc/containers/RiakutoChapter09/molecules/MemoizeSampleContainer/index.tsxを参照してください。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-4. Hooksにおけるメモ化を理解する">
      <Frame001 headingText="タイマー">
        <MemoizeSampleContainer limit={60} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section04Memoize;
