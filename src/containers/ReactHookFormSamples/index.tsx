import ReactHookFormSample01Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample01Container';
import ReactHookFormSample02Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample02Container';
import ReactHookFormSample03Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample03Container';
import ReactHookFormSample04Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample04Container';
import Template001 from 'components/common/templates/Template001';

const ReactHookFormSample01: React.VFC = () => (
  <Template001
    pageHeadingText="react-hook-form ver 7.xを使ってみる"
    pageLeadItems={[
      [
        {
          tagName: 'div',
          content:
            'react-hook-form ver 7.xを使ってみながら、基本的な使用方法、業務を想定した設計について学習し、備忘録として要点をまとめています。',
        },
      ],
    ]}
  >
    <ReactHookFormSample01Container />
    <ReactHookFormSample02Container />
    <ReactHookFormSample03Container />
    <ReactHookFormSample04Container />
  </Template001>
);

export default ReactHookFormSample01;
