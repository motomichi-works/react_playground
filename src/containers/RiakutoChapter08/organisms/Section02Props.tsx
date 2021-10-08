import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import CharacterList, {
  Character,
} from 'components/riakuto-chapter08/molecules-and-atoms/CharacterList';

const Section02Props: React.VFC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];

  return (
    <BasicOrganism001 sectionHeadingText="8-2. コンポーネントとProps">
      <CharacterList school="湘北高校" characters={characters} />
    </BasicOrganism001>
  );
};

export default Section02Props;
