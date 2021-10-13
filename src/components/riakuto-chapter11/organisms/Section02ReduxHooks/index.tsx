import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardHooksContainer from 'containers/RiakutoChapter11/molecules/CounterBoardHooksContainer';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';

const Section02HooksRedux: React.VFC = () => (
  <BasicOrganism001 sectionHeadingText="11-2. Reduxの使い方(Hooks)">
    <Frame001 headingText="ビーズカウンター">
      <CounterBoardHooksContainer />
      <ColorfulBeadsContainer />
    </Frame001>
  </BasicOrganism001>
);

export default Section02HooksRedux;
