import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';

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

  return (
    <>
      <Frame001 headingText="タイマー">
        <Card001
          count={timeLeft}
          buttons={buttons}
          modifierClassNames={modifierClassNames}
        />
      </Frame001>
      <Frame001 headingText="このセクションで学んだポイント">
        <ul>
          <li>・useMemo()で値をメモ化できる。</li>
          <li>・useCallback()で関数をメモ化できる。</li>
          <li>・メモ化した値をdependencies arrayの要素として渡す。</li>
          <li>・useRef()で関数コンポーネントの外に値を保持できる。</li>
        </ul>
      </Frame001>
    </>
  );
};

export default MemoizeSample;
