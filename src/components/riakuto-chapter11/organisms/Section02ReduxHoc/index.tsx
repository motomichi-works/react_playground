import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardHocContainer from 'containers/RiakutoChapter11/molecules/CounterBoardHocContainer';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';
import List001, { Items } from 'components/common/molecules-and-atoms/List001';

const Section02HocRedux: React.VFC = () => {
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
          'サンプルコードは src/containers/RiakutoChapter11/molecules/CounterBoardHocContainer.tsx を参照。',
      },
    ],
  ];

  return (
    <BasicOrganism001 sectionHeadingText="11-2. Reduxの使い方(HOC)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoardHocContainer />
        <ColorfulBeadsContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </BasicOrganism001>
  );
};

export default Section02HocRedux;
