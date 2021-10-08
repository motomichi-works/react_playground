import { Component, ReactElement } from 'react';
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

/* eslint-disable react/prefer-stateless-function */
class CharacterListClass extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props;

    return (
      <div>
        <Heading001 text={school} modifierClassNames={['Lv3']} />
        {characters.map((character) => (
          <ul key={character.id} className={styles.List}>
            <li>{character.name}</li>
            <li>{character.grade}年生</li>
            <li>{character.height ?? '???'}cm</li>
          </ul>
        ))}
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CharacterListClass;
