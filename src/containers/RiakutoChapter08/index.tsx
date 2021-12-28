import Section02Props from 'components/riakuto-chapter08/organisms/Section02Props';
import Section03CharacterListClass from 'components/riakuto-chapter08/organisms/Section03CharacterListClass';
import Section03CounterClass from 'components/riakuto-chapter08/organisms/Section03CounterClass';
import Template001 from 'components/common/templates/Template001';

const RiakutoChapter08: React.VFC = () => (
  <Template001
    pageHeadingText="RiakutoChapter08"
    pageLeadItems={[
      [
        {
          tagName: 'div',
          content:
            '書籍「りあクト！」を読みながら自身に必要と思われる箇所について実装して、備忘録として要点をまとめています。',
        },
        {
          tagName: 'span',
          content: '書籍「りあクト！」はBoothの「',
        },
        {
          tagName: 'a',
          content: 'https://oukayuka.booth.pm/',
          href: 'https://oukayuka.booth.pm/',
        },
        {
          tagName: 'span',
          content:
            '」から購入できます。これからReactを勉強しようという方にオススメです。',
        },
      ],
    ]}
  >
    <Section02Props />
    <Section03CharacterListClass />
    <Section03CounterClass />
  </Template001>
);

export default RiakutoChapter08;
