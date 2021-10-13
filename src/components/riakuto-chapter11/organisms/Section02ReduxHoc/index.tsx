import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardHocContainer from 'containers/RiakutoChapter11/molecules/CounterBoardHocContainer';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';

const Section02HocRedux: React.VFC = () => (
  <BasicOrganism001 sectionHeadingText="11-2. Reduxの使い方(HOC)">
    <Frame001 headingText="ビーズカウンター">
      <CounterBoardHocContainer />
      <ColorfulBeadsContainer />
    </Frame001>
  </BasicOrganism001>
);

export default Section02HocRedux;
