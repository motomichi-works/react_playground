import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import ColorfulBeads from 'components/riakuto-chapter11/molecules/ColorfulBeads';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';
import CounterBoard, {
  Props as CounterBoardProps,
} from 'components/riakuto-chapter11/molecules/CounterBoard';

const Section05UseReducer: React.VFC<CounterBoardProps> = ({
  count = 0,
  addBulkUnit = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => {
  const items: Items = [
    'useReducer()の使い方。',
    'createSlice()を使わずに書くと冗長な記述になります。',
    'サンプルコードは src/containers/RiakutoChapter11/organisms/Section05UseReducerContainer.tsx を参照してください。',
  ];

  return (
    <OrganismFrame001 sectionHeadingText="11-5. ReduxとuseReducer(createSlice()を使わない書き方)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoard {...{ count, addBulkUnit, decrement, increment }} />
        <ColorfulBeads count={count} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section05UseReducer;
