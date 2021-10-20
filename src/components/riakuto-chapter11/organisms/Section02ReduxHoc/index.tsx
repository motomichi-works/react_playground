import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardHocContainer from 'containers/RiakutoChapter11/molecules/CounterBoardHocContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';

const Section02ReduxHoc: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content:
          'HOCとは、Higher-Order Componentの略であり、「コンポーネントを受け取り、コンポーネントを返す関数」をHOCと呼ぶらしい。',
      },
    ],
    [{ tagName: 'div', content: 'react-reduxのconnect()()がHOCにあたる。' }],
    [
      {
        tagName: 'code',
        content:
          'connect(mapStateToProps, mapDispatchToProps)(ExampleComponent); ',
      },
      {
        tagName: 'span',
        content: 'みたいな感じで使用する。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'storeを定義している箇所のサンプルコードは src/stores/riakuto-chapter11-section02/* を参照。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'storeを使用している箇所のサンプルコードは src/containers/RiakutoChapter11/molecules/CounterBoardHocContainer.tsx を参照。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="11-2. Reduxの使い方(HOC)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoardHocContainer />
        <ColorfulBeadsContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section02ReduxHoc;
