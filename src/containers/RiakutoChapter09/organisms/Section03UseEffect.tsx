import { useState, useEffect } from 'react';
import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import UseEffectSample from 'components/riakuto-chapter09/molecules/UseEffectSample';

type Props = {
  limit: number;
};

const Section03UseEffect: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  // Desc: ここは9-4で第二引数に配列を渡すことで修正されるので、9-3時点では一旦このまま
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  });

  return (
    <BasicOrganism001 sectionHeadingText="9-3. Hooksで副作用を扱う">
      <UseEffectSample timeLeft={timeLeft} reset={reset} />
    </BasicOrganism001>
  );
};

export default Section03UseEffect;
