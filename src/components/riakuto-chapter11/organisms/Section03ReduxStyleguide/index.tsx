import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';
import Heading001 from 'components/common/molecules/Heading001';

const Section03ReduxStyleguide: React.VFC = () => {
  const items1: Items = [
    '1. stateを直接書き換えない。',
    '2. reducerに副作用を持たせない。',
    '3. シリアライズできない値をstateやactionに入れない。',
    '4. storeはひとつのアプリにつきひとつだけ。',
  ];
  const items2: Items = [
    '5. actionをsetterではなくイベントとしてモデリングする。《B》',
    '6. actionの名前は意味を的確に表現したものにする。《B》',
    '7. actionタイプ名を「ドメインモデル/イベント種別」のフォーマットで書く。《C》',
    '8. actionをFSAに準拠させる。《C》',
    '9. dispatchするactionは直に書かずaction creatorを使って生成する。《C》',
  ];
  const items3: Items = [
    '10. Reduxのロジックを書くときはRedux Toolkitを使う。《B》',
    '11. イミュータブルな状態の更新にはImmerを使う。《B》',
    '12. デバッグにはRedux DevTools拡張を使う。《B》',
    '13. ファイル構造には「Feature Folder」またはDucksパターンを使用する。《B》',
  ];
  const items4: Items = [
    '14. どの状態をどこに持たせるかは柔軟に考える。《B》',
    '15. フォームの状態をReduxに入れない。《C》',
    '16. 複雑なロジックはコンポーネントの外に追い出す。《C》',
    '17. 非同期処理にはReduxThunkを使う。《C》',
  ];

  return (
    <OrganismFrame001 sectionHeadingText="11-3. Redux公式スタイルガイド">
      <Frame001 headingText="この節で学んだポイント">
        <Heading001
          text="優先度A(必須)のルール"
          modifierClassNames={['m_Lv4']}
        />
        <List001 items={items1} />

        <Heading001
          text="Actionに関するルール"
          modifierClassNames={['m_Lv4']}
        />
        <List001 items={items2} />

        <Heading001
          text="ツールやデザインパターンの利用に関するルール"
          modifierClassNames={['m_Lv4']}
        />
        <List001 items={items3} />

        <Heading001
          text="その他設計に関するルール"
          modifierClassNames={['m_Lv4']}
        />
        <List001 items={items4} />
      </Frame001>
    </OrganismFrame001>
  );
};

export default Section03ReduxStyleguide;
