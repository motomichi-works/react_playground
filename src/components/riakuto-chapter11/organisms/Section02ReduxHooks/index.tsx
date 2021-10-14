import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardHooksContainer from 'containers/RiakutoChapter11/molecules/CounterBoardHooksContainer';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';
import List001, { Items } from 'components/common/molecules-and-atoms/List001';

const Section02HooksRedux: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content: 'reduxのHooksの使い方。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'useDispatch, useSelector',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'サンプルコードは src/containers/RiakutoChapter11/molecules/CounterBoardHooksContainer.tsx を参照。',
      },
    ],
  ];

  return (
    <BasicOrganism001 sectionHeadingText="11-2. Reduxの使い方(Hooks)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoardHooksContainer />
        <ColorfulBeadsContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </BasicOrganism001>
  );
};

export default Section02HooksRedux;
