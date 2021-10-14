import { VFC } from 'react';
import Card001 from 'components/common/molecules/Card001';

type Props = {
  count?: number;
  addBulkUnit?: () => void;
  decrement?: () => void;
  increment?: () => void;
};

const CounterBoard: VFC<Props> = ({
  count = 0,
  addBulkUnit = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => {
  const buttons = [
    {
      label: '-1',
      handleClick: decrement,
    },
    {
      label: '+1',
      handleClick: increment,
    },
    {
      label: 'addBulkUnit',
      handleClick: addBulkUnit,
    },
  ];

  return <Card001 count={count} buttons={buttons} />;
};

export default CounterBoard;
