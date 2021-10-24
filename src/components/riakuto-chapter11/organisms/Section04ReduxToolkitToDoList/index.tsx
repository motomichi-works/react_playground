import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import ColorfulBeadsContainer from 'containers/RiakutoChapter11/molecules/ColorfulBeadsContainer';
import CounterBoardToolkitContainer from 'containers/RiakutoChapter11/molecules/CounterBoardToolkitContainer';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

const Section04ReduxToolkitToDoList: React.VFC = () => {
  const items: Items = [
    'ToDoList作らなくてもわかりそうなので、書籍を読むだけにして一旦とばします。ビーズカウンターが標示されていますが今はそのままにしておきます。',
    'createReducer()やcreateSlice()で定義したreducersはnewStateをreturnしなくても成立します。',
    'createReducer()やcreateSlice()で定義したreducersが何もreturnしない場合は、引数から受け取ったstateの値を直接変更しても、内部的にImmerを適用してイミュータブルなState更新処理を行うようになっているそうです。',
  ];

  return (
    <OrganismFrame001 sectionHeadingText="11-4. ReduxToolkitを使って楽をしよう(ToDoList)">
      <Frame001 headingText="ビーズカウンター">
        <CounterBoardToolkitContainer />
        <ColorfulBeadsContainer />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section04ReduxToolkitToDoList;
