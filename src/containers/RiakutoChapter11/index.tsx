import Template001 from 'components/common/templates/Template001';
import Section02ReduxHooksContainer from 'containers/RiakutoChapter11/organisms/Section02ReduxHooksContainer';
import Section02ReduxHocContainer from 'containers/RiakutoChapter11/organisms/Section02ReduxHocContainer';
import Section03ReduxStyleguide from 'components/riakuto-chapter11/organisms/Section03ReduxStyleguide';
import Section04ReduxToolkitCounterContainer from 'containers/RiakutoChapter11/organisms/Section04ReduxToolkitCounterContainer';

const RiakutoChapter11: React.VFC = () => (
  <Template001 pageHeadingText="RiakutoChapter11">
    <Section02ReduxHooksContainer />
    <Section02ReduxHocContainer />
    <Section03ReduxStyleguide />
    <Section04ReduxToolkitCounterContainer />
  </Template001>
);

export default RiakutoChapter11;
