import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from 'utils/math-tool';
import Card001 from 'components/common/molecules/Card001';

type Props = {
  limit: number;
};

const MemoizeSampleContainer: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);

  // useMemoを使うことによって、limitが変化したときだけ`() => getPrimes(limit)`が実行されるようにしています。
  const primes = useMemo(() => getPrimes(limit), [limit]);

  // useRefを使うことであらゆる書き換え可能な値を保持しておくことができます。
  // useRefで代入した値は、stateとは違い、値の書き換えが行われても再レンダリングが行われません。
  const timerId = useRef<NodeJS.Timeout>();

  const tick = () => setTimeLeft((t) => t - 1);

  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  // 関数は、内容が同じでも定義毎に異なるアドレスに定義されるため、useCallbackでメモ化しています。
  // dependencies arrayの要素が変化したら、関数が異なるアドレスに再定義されます。
  const reset = useCallback(() => {
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    setTimeLeft(limit);
  }, [limit]);

  // コンポーネントがmountされた初回だけ実行される処理
  useEffect(() => {
    reset();

    // コンポーネントがunmountされたときに実行したい関数をreturnします。
    return clearTimer;
  }, [reset]);

  // timeLeftが更新される度に実行される処理
  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

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
    <Card001
      count={timeLeft}
      buttons={buttons}
      modifierClassNames={modifierClassNames}
    />
  );
};

export default MemoizeSampleContainer;
