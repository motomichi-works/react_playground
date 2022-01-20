import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import UseEffectSampleContainer from 'containers/RiakutoChapter09/molecules/UseEffectSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';

const Section03UseEffect: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content:
          'useEffect()が初回実行されるのは最初のレンダリングが行われて、その内容がブラウザに反映された直後です。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'useEffect()の第二引数に渡すdependencies arrayの要素が更新されたときだけ処理を実行する。',
      },
    ],
    [
      {
        tagName: 'span',
        content:
          'useEffect()の第二引数に渡すdependencies arrayが空配列の場合は、第一引数に渡した処理が初回レンダリング時だけ実行されます。',
      },
    ],
    [
      {
        tagName: 'span',
        content:
          'useEffect()の第二引数を渡さない場合は、第一引数に渡した処理が、レンダリングの度に毎回実行されます。',
      },
    ],
    [
      {
        tagName: 'span',
        content:
          'useLayoutEffect()という、componentDidMountやComponentDidUpdateと同じタイミングで画面の更新をブロックして実行されるEffect Hook APIも用意されています。',
      },
    ],
    [
      {
        tagName: 'span',
        content:
          'クラスコンポーネントのレンダリングは生き続けているインスタンスのrender()メソッドの実行です。そのため、インスタンス内に可変のメンバー変数としてpropsやstateは保持されます。',
      },
    ],
    [
      {
        tagName: 'span',
        content:
          '関数コンポーネントのレンダリングとは、その関数自体が最初から最後まで実行されることです。そのため、関数内部で定義されている関数や変数も毎回の実行の度に定義し直され、実行が終われば破棄されます。つまり普通の関数コンポーネントは実行された後に何も残りませんが、関数コンポーネント内でState Hookが使用されていた場合は、レンダリング後のstateの値が関数の外に保存され、レンダリングが始まるタイミングで改めてコンポーネントに渡されます。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-3. Hooksで副作用を扱う">
      <Frame001 headingText="タイマー">
        <UseEffectSampleContainer limit={60} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section03UseEffect;
