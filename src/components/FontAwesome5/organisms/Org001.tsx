import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

const Hoge: React.VFC = () => (
  <OrganismFrame001 sectionHeadingText="サンプル">
    <div>
      <FontAwesomeIcon icon={faCheck} />
    </div>
    <div>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  </OrganismFrame001>
);

export default Hoge;
