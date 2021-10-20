import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  counterSlice,
  CounterState,
} from 'stores/riakuto-chapter11-section04/features/counter';
import CounterBoard from 'components/riakuto-chapter11/molecules/CounterBoard';

const CounterBoardToolkitContainer: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  const addBulkUnit = () => {
    const BULK_UNIT = 10;
    dispatch(added(BULK_UNIT));
  };

  return (
    <CounterBoard
      count={count}
      addBulkUnit={addBulkUnit}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default CounterBoardToolkitContainer;
