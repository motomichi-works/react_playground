import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  add,
  decrement,
  increment,
} from 'stores/riakuto-chapter11-section02/actions';
import { CounterState } from 'stores/riakuto-chapter11-section02/reducer';
import CounterBoardHocContainer from 'components/riakuto-chapter11/molecules-and-atoms/CounterBoard';

type StateProps = { count: number };
type DispatchProps = {
  addBulkUnit: () => void;
  decrement: () => void;
  increment: () => void;
};

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  const addBulkUnit = () => {
    const BULK_UNIT = 10;
    dispatch(add(BULK_UNIT));
  };

  return {
    addBulkUnit,
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  };
};

// 以下の通り引数を渡しています。
// connect(コンポーネント内で参照する値, コンポーネント内で使用するdispatcher)(コンポーネント);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterBoardHocContainer);
