import { Link } from 'react-router-dom';
import Template001 from 'components/common/templates/Template001';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';

const NotFound: React.VFC = () => (
  <Template001 pageHeadingText="Page Not Found">
    <OrganismFrame001 sectionHeadingText="お探しのページは見つかりませんでした">
      <div>
        <p>
          <Link to="/">こちら</Link>からトップページへ戻れます。
        </p>
      </div>
    </OrganismFrame001>
  </Template001>
);

export default NotFound;
