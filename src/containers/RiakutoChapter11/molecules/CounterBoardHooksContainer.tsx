import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  decrement,
  increment,
} from 'stores/riakuto-chapter11-section02/actions';
import { CounterState } from 'stores/riakuto-chapter11-section02/reducer';
import CounterBoard from 'components/riakuto-chapter11/molecules-and-atoms/CounterBoard';

const CounterBoardHooksContainer: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const addBulkUnit = () => {
    const BULK_UNIT = 10;
    dispatch(add(BULK_UNIT));
  };

  return (
    <CounterBoard
      count={count}
      addBulkUnit={addBulkUnit}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default CounterBoardHooksContainer;
