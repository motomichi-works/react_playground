import { VFC } from 'react';
import { useSelector } from 'react-redux';

import ColorfulBeads from 'components/riakuto-chapter11/molecules-and-atoms/ColorfulBeads';
import { CounterState } from 'stores/riakuto-chapter11-section02/reducer';

const ColorfulBeadsContainer: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default ColorfulBeadsContainer;
