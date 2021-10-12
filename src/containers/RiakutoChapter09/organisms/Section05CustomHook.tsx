import BasicOrganism001 from 'components/common/organisms/BasicOrganism001';
import CustomHookSample from 'components/riakuto-chapter09/molecules-and-atoms/CustomHookSample';
import useTimer from 'hooks/use-timer';

type Props = {
  limit: number;
};

const Section05CustomHook: React.VFC<Props> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <BasicOrganism001 sectionHeadingText="9-5. Custom Hookでロジックを分離・再利用する">
      <CustomHookSample timeLeft={timeLeft} reset={reset} isPrime={isPrime} />
    </BasicOrganism001>
  );
};

export default Section05CustomHook;
