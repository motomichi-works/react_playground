import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import UseEffectSampleContainer from 'containers/RiakutoChapter09/molecules/UseEffectSampleContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const Section03UseEffect: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content:
          'useEffect()はdependencies arrayの要素が更新されたときだけ処理を実行する。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="9-3. Hooksで副作用を扱う">
      <Frame001 headingText="タイマー">
        <UseEffectSampleContainer limit={60} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section03UseEffect;
