import { Component, ReactElement } from 'react';
import OrganismFrame001 from 'components/common/molecules/OrganismFrame001';
import ConterClass from 'components/riakuto-chapter08/molecules/CounterClass';

type State = { count: number };

/* eslint-disable react/prefer-stateless-function */
class Section03CounterClass extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  reset(): void {
    this.setState({ count: 0 });
  }

  increment(): void {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render(): ReactElement {
    return (
      <OrganismFrame001 sectionHeadingText="8-3. クラスコンポーネントで学ぶState-Counter">
        <ConterClass />
      </OrganismFrame001>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default Section03CounterClass;
