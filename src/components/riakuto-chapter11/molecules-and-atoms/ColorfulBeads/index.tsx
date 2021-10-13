import { VFC } from 'react';

const ColorfulBeads: VFC<{ count?: number }> = ({ count = 0 }) => (
  <div>
    <p>{count}</p>
  </div>
);

export default ColorfulBeads;
