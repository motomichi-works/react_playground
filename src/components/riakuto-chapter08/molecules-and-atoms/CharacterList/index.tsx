import Heading001 from 'components/common/molecules-and-atoms/Heading001';
import styles from './index.module.scss';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: React.VFC<Props> = ({ school, characters }) => (
  <div className="CharacterList">
    <Heading001 text={school} modifierClassNames={['m_Lv3']} />
    {characters.map((character) => (
      <ul key={character.id} className={styles.List}>
        <li>{character.name}</li>
        <li>{character.grade}年生</li>
        <li>{character.height ?? '???'}cm</li>
      </ul>
    ))}
  </div>
);

export default CharacterList;
