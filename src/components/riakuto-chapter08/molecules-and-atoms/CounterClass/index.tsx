import { Component, ReactElement } from 'react';
import Heading001 from 'components/common/molecules-and-atoms/Heading001';

/* eslint-disable react/prefer-stateless-function */
class CounterClass extends Component {
  render(): ReactElement {
    return (
      <div>
        <Heading001 text="カウンター" modifierClassNames={['Lv3']} />
        <div>
          <p>カウンター</p>
        </div>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default CounterClass;
