import Template001 from 'components/common/templates/Template001';
import Section02ReduxHooksContainer from 'containers/RiakutoChapter11/organisms/Section02ReduxHooksContainer';
import Section02ReduxHocContainer from 'containers/RiakutoChapter11/organisms/Section02ReduxHocContainer';
import Section03ReduxStyleguide from 'components/riakuto-chapter11/organisms/Section03ReduxStyleguide';
import Section04ReduxToolkitCounterContainer from 'containers/RiakutoChapter11/organisms/Section04ReduxToolkitCounterContainer';
import Section04ReduxToolkitToDoListContainer from 'containers/RiakutoChapter11/organisms/Section04ReduxToolkitToDoListContainer';
import Section05UseReducerContainer from 'containers/RiakutoChapter11/organisms/Section05UseReducerContainer';
import Section05UseReducer2Container from 'containers/RiakutoChapter11/organisms/Section05UseReducer2Container';

const RiakutoChapter11: React.VFC = () => (
  <Template001 pageHeadingText="RiakutoChapter11">
    <Section02ReduxHooksContainer />
    <Section02ReduxHocContainer />
    <Section03ReduxStyleguide />
    <Section04ReduxToolkitCounterContainer />
    <Section04ReduxToolkitToDoListContainer />
    <Section05UseReducerContainer />
    <Section05UseReducer2Container />
  </Template001>
);

export default RiakutoChapter11;
