import { useReducer } from 'react';
import Section05UseReducer from 'components/riakuto-chapter11/organisms/Section05UseReducer';

const CounterActionType = {
  added: 'counter/added',
  decremented: 'counter/decremented',
  incremented: 'counter/incremented',
} as const;

type ValueOf<T> = T[keyof T];
type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  payload?: number;
};

type CounterState = { count: number };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.added:
      return {
        ...state,
        count: state.count + (action.payload ?? 0),
      };
    case CounterActionType.decremented:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.incremented:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};

const add = (payload: number): CounterAction => ({
  type: CounterActionType.added,
  payload,
});
const decrement = (): CounterAction => ({
  type: CounterActionType.decremented,
});
const increment = (): CounterAction => ({
  type: CounterActionType.incremented,
});

const Section05UseReducerContainer: React.VFC<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );

  const addBulkUnit = () => {
    const BULK_UNIT = 10;
    dispatch(add(BULK_UNIT));
  };

  return (
    <Section05UseReducer
      count={state.count}
      addBulkUnit={addBulkUnit}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default Section05UseReducerContainer;
