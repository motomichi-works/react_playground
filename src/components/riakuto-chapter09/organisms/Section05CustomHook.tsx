import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import CustomHookSampleContainer from 'containers/RiakutoChapter09/molecules/CustomHookSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const Section05CustomHook: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content: 'useXxxx()を定義してHooksを機能毎にまとめられる。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-5. Custom Hookでロジックを分離・再利用する">
      <Frame001 headingText="タイマー">
        <CustomHookSampleContainer limit={60} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section05CustomHook;
