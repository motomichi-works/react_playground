import { Component, ReactElement } from 'react';
import Heading001 from 'components/common/molecules/Heading001';

/* eslint-disable react/prefer-stateless-function */
class CounterClass extends Component {
  render(): ReactElement {
    return (
      <div>
        <Heading001 text="カウンター" modifierClassNames={['m_Lv3']} />
        <div>
          <p>カウンター</p>
        </div>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CounterClass;
