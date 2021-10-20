import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardToolkitContainer from 'containers/RiakutoChapter11/molecules/CounterBoardToolkitContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List002, { Items } from 'components/common/molecules/List002';

const Section04ReduxToolkitCounter: React.VFC = () => {
  const items: Items = [
    [
      {
        tagName: 'div',
        content: 'ReduxToolkitの使い方。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'ReduxToolkitのcreateAction()とcreateReducer() + PayloadActionを使ってstoreを定義できますが、createSlice()を使うとreducerとactionsがより簡潔な記述で定義できます。',
      },
      {
        tagName: 'div',
        content: 'createSlice()は例えば以下のように使います。',
      },
      {
        tagName: 'pre',
        content: `
          export const counterSlice = createSlice({
            name: 'counter',
            initialState,
            reducers: {
              added: (state, action: PayloadAction<number>) => ({
                ...state,
                count: state.count + action.payload,
              }),
              decremented: (state) => ({ ...state, count: state.count - 1 }),
              incremented: (state) => ({ ...state, count: state.count + 1 }),
            },
          });
        `,
      },
      {
        tagName: 'div',
        content:
          'actionCreaterによって生成されるaction.typeは以下のようになります。',
      },
      {
        tagName: 'div',
        content: '・counter/added',
      },
      {
        tagName: 'div',
        content: '・counter/decremented',
      },
      {
        tagName: 'div',
        content: '・counter/incremented',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'storeを定義している箇所のサンプルコードは src/stores/riakuto-chapter11-section04/features/counter.ts を参照してください。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'storeを使用している箇所のサンプルコードは src/containers/RiakutoChapter11/molecules/CounterBoardToolkitContainer.tsx を参照してください。',
      },
    ],
    [
      {
        tagName: 'div',
        content:
          'createAction()とcreateReducer() + PayloadActionを使ってstoreを定義している箇所のサンプルコードは src/stores/riakuto-chapter11-section04/features/counter/*.ts を参照。この2ファイルはサンプルの動作に使用していませんが、参考として作成しています。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'Redux DevToolsの使い方。',
      },
    ],
  ];

  return (
    <OrganismFrame001 sectionHeadingText="11-4. ReduxToolkitを使って楽をしよう(counter)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoardToolkitContainer />
        <ColorfulBeadsContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List002 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section04ReduxToolkitCounter;
