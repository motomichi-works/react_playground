import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import TextLikeField002, {
  TextLikeField002Props,
} from 'components/common/molecules/TextLikeField002';

type Props = {
  sample1Value: TextLikeField002Props['value'];
  setSample1Value: TextLikeField002Props['setValue'];
};

const Sample001: React.VFC<Props> = ({ sample1Value, setSample1Value }) => (
  <OrganismFrame001 sectionHeadingText="サンプル001">
    <div>{sample1Value}</div>
    <TextLikeField002
      name="sample1"
      type="text"
      placeholder="サンプル1"
      value={sample1Value}
      setValue={setSample1Value}
    />
  </OrganismFrame001>
);

export default Sample001;
