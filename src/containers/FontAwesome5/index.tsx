import FontAwesome5 from 'components/FontAwesome5';
import Template001 from 'components/common/templates/Template001';

const FontAwesome5Container: React.VFC = () => (
  <Template001
    pageHeadingText="FontAwesome5サンプル"
    pageLeadItems={[
      [
        {
          tagName: 'div',
          content: 'FontAwesome5を使ってみました。',
        },
      ],
    ]}
  >
    <FontAwesome5 />
  </Template001>
);

export default FontAwesome5Container;
