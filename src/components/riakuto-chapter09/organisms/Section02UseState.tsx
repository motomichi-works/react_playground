import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import UseStateSampleContainer from 'containers/RiakutoChapter09/molecules/UseStateSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const Section02UseState: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content: 'useState()の使い方。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-2. Hooksでstateを扱う">
      <Frame001 headingText="カウンター">
        <UseStateSampleContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section02UseState;
