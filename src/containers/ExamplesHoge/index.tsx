import Hoge from 'components/ExamplesHoge/organisms/Hoge';
import Template001 from 'components/common/templates/Template001';

const ExamplesHoge: React.VFC = () => (
  <Template001
    pageHeadingText="ExamplesHogeページ"
    pageLeadItems={[
      [
        {
          tagName: 'div',
          content: '簡素なページを試しに作ってみました。',
        },
      ],
    ]}
  >
    <Hoge />
  </Template001>
);

export default ExamplesHoge;
