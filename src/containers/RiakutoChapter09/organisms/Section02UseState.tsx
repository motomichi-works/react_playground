import { useState } from 'react';
import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import UseState from 'components/riakuto-chapter09/molecules-and-atoms/UseState';

const Section02UseState: React.VFC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const reset = () => setCount(0);

  return (
    <BasicOrganism001 sectionHeadingText="9-2. Hooksでstateを扱う">
      <UseState count={count} increment={increment} reset={reset} />
    </BasicOrganism001>
  );
};

export default Section02UseState;
