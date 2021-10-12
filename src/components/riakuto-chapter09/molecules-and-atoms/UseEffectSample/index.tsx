import Card001 from 'components/common/molecules-and-atoms/Card001';
import Frame001 from 'components/common/molecules-and-atoms/Frame001';
import List001, { Items } from 'components/common/molecules-and-atoms/List001';

type Props = {
  timeLeft: number;
  reset: () => void;
};

const UseEffectSample: React.VFC<Props> = ({ timeLeft, reset }) => {
  const buttons = [
    {
      label: 'reset',
      handleClick: reset,
    },
  ];

  const items: Items = [
    [
      {
        tagName: 'div',
        content:
          'useEffect()はdependencies arrayの要素が更新されたときだけ処理を実行する。',
      },
    ],
  ];

  return (
    <>
      <Frame001 headingText="タイマー">
        <Card001 count={timeLeft} buttons={buttons} />
      </Frame001>
      <Frame001 headingText="この節で学んだポイント">
        <List001 items={items} />
      </Frame001>
    </>
  );
};

export default UseEffectSample;
