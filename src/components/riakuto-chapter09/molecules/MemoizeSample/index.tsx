import Card001 from 'components/common/molecules/Card001';
import Frame001 from 'components/common/molecules/Frame001';
import List001, { Items } from 'components/common/molecules/List001';

type Props = {
  timeLeft: number;
  reset: () => void;
  primes: number[];
};

const MemoizeSample: React.VFC<Props> = ({ timeLeft, reset, primes }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  const modifierClassNames: 'm_EmpasisColor'[] = primes.includes(timeLeft)
    ? ['m_EmpasisColor']
    : [];

  const items: Items = [
    [{ tagName: 'div', content: 'useMemo()で値をメモ化できる。' }],
    [{ tagName: 'div', content: 'useCallback()で関数をメモ化できる。' }],
    [
      {
        tagName: 'div',
        content: 'メモ化した値をdependencies arrayの要素として渡す。',
      },
    ],
    [
      {
        tagName: 'div',
        content: 'useRef()で関数コンポーネントの外に値を保持できる。',
      },
    ],
  ];

  return (
    <>
      <Frame001 headingText="タイマー">
        <Card001
          count={timeLeft}
          buttons={buttons}
          modifierClassNames={modifierClassNames}
        />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </>
  );
};

export default MemoizeSample;
