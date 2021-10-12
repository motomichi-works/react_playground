import Section02UseState from 'containers/RiakutoChapter09/organisms/Section02UseState';
import Section03UseEffect from 'containers/RiakutoChapter09/organisms/Section03UseEffect';
import Section04Memoize from 'containers/RiakutoChapter09/organisms/Section04Memoize';
import Section05CustomHook from 'containers/RiakutoChapter09/organisms/Section05CustomHook';
import Template001 from 'components/common/templates/Template001';

const RiakutoChapter08: React.VFC = () => (
  <Template001 pageHeadingText="RiakutoChapter09">
    <Section02UseState />
    <Section03UseEffect limit={60} />
    <Section04Memoize limit={60} />
    <Section05CustomHook limit={60} />
  </Template001>
);

export default RiakutoChapter08;
