import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const ReactHookFormSample01: React.VFC = () => {
  const items: Items = ['ほげほげふー'];

  return (
    <OrganismFrame001 sectionHeadingText="ReactHookFormSample01">
      <Frame001 headingText="ReactHookFormSample01">
        <div>ReactHookFormSample01特有のなんらかのコンテンツ</div>
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default ReactHookFormSample01;
