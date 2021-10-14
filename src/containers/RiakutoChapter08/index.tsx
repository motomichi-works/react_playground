import Section02Props from 'components/riakuto-chapter08/organisms/Section02Props';
import Section03CharacterListClass from 'components/riakuto-chapter08/organisms/Section03CharacterListClass';
import Section03CounterClass from 'components/riakuto-chapter08/organisms/Section03CounterClass';
import Template001 from 'components/common/templates/Template001';

const RiakutoChapter08: React.VFC = () => (
  <Template001 pageHeadingText="RiakutoChapter08">
    <Section02Props />
    <Section03CharacterListClass />
    <Section03CounterClass />
  </Template001>
);

export default RiakutoChapter08;
