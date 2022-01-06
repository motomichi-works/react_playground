import Template001 from 'components/common/templates/Template001';
import Sample001Container from 'containers/TextFieldSamples/organisms/Sample001Container';

const FontAwesome5: React.VFC = () => (
  <Template001
    pageHeadingText="ReactHookFormを使用しないTextFieldSamples"
    pageLeadItems={[
      [
        {
          tagName: 'div',
          content:
            'ReactHookFormを使用しないテキストフィールドを作ってみます。',
        },
      ],
    ]}
  >
    <Sample001Container />
  </Template001>
);

export default FontAwesome5;
