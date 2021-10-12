import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';
import List001, { Items } from 'components/common/molecules-and-atoms/List001';

type Props = {
  timeLeft: number;
  reset: () => void;
  isPrime: boolean;
};

const CustomHookSample: React.VFC<Props> = ({ timeLeft, reset, isPrime }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  const modifierClassNames: 'm_EmpasisColor'[] = isPrime
    ? ['m_EmpasisColor']
    : [];

  const items: Items = [
    [
      {
        tagName: 'div',
        content: 'useXxxx()を定義してHooksを機能毎にまとめられる。',
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

export default CustomHookSample;
