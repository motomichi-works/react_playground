import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import ReduxSample from 'components/riakuto-chapter11/molecules-and-atoms/ReduxSample';
import useTimer from 'hooks/use-timer';

type Props = {
  limit: number;
};

const Section02Redux: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <BasicOrganism001 sectionHeadingText="11-2. Reduxの使い方">
      <ReduxSample timeLeft={timeLeft} reset={reset} isPrime={isPrime} />
    </BasicOrganism001>
  );
};

export default Section02Redux;
