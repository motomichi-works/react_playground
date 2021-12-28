import Section02UseState from 'components/riakuto-chapter09/organisms/Section02UseState';
import Section03UseEffect from 'components/riakuto-chapter09/organisms/Section03UseEffect';
import Section04Memoize from 'components/riakuto-chapter09/organisms/Section04Memoize';
import Section05CustomHook from 'components/riakuto-chapter09/organisms/Section05CustomHook';
import Template001 from 'components/common/templates/Template001';

const RiakutoChapter08: React.VFC = () => (
  <Template001
    pageHeadingText="RiakutoChapter09"
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
    <Section02UseState />
    <Section03UseEffect />
    <Section04Memoize />
    <Section05CustomHook />
  </Template001>
);

export default RiakutoChapter08;
