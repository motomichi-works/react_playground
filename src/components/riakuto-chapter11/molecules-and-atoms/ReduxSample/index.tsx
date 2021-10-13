import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';
import List001, { Items } from 'components/common/molecules-and-atoms/List001';

type Props = {
  timeLeft: number;
  reset: () => void;
  isPrime: boolean;
};

const ReduxSample: React.VFC<Props> = ({ timeLeft, reset, isPrime }) => {
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
        content: 'ほげほげふー',
      },
    ],
  ];

  return (
    <>
      <Frame001 headingText="ビーズカウンター">
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

export default ReduxSample;
