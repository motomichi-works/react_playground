import { useReducer } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Section05UseReducer2 from 'components/riakuto-chapter11/organisms/Section05UseReducer2';

type CounterState = { count: number };

// Desc: このinitialStateはcreateSlice()の第二引数としてのみ使用され、createSlice()の型推論に利用されます。
const initialState: CounterState = { count: 0 };

// Desc: reduxを使わずにuseReducerを使う場合でも、createSlice()を使うことでreducerとactionsの定義を簡潔に書くことができます。
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
  },
});

const Section05UseReducer2Container: React.VFC<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );
  const { added, decremented, incremented } = counterSlice.actions;

  const addBulkUnit = () => {
    const BULK_UNIT = 10;
    dispatch(added(BULK_UNIT));
  };

  return (
    <Section05UseReducer2
      count={state.count}
      addBulkUnit={addBulkUnit}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default Section05UseReducer2Container;
