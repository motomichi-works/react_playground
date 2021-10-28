import ReactHookFormSample01Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample01Container';
import ReactHookFormSample02Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample02Container';
import ReactHookFormSample03Container from 'containers/ReactHookFormSamples/organisms/ReactHookFormSample03Container';
import Template001 from 'components/common/templates/Template001';

const ReactHookFormSample01: React.VFC = () => (
  <Template001 pageHeadingText="react-hook-form ver 7.xを使ってみる">
    <ReactHookFormSample01Container />
    <ReactHookFormSample02Container />
    <ReactHookFormSample03Container />
  </Template001>
);

export default ReactHookFormSample01;
