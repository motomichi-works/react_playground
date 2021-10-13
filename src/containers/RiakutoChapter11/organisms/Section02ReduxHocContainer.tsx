// Desc: 本来はrootのindex.tsxでcreateStore, Provider, counterReducer, initialStateをimportしますが、サンプルの独立性を考慮してorganismのcontainerでimportしています。
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  counterReducer,
  initialState,
} from 'stores/riakuto-chapter11-section02/reducer';
import Section02ReduxHoc from 'components/riakuto-chapter11/organisms/Section02ReduxHoc';

// Desc: 本来はrootのindex.tsxでcreateStore()しますが、サンプルの独立性を考慮してorganismのcontainerでimportしています。
const store = createStore(counterReducer, initialState);

const Section02ReduxHocContainer: React.VFC = () => (
  // Desc: 本来はrootのindex.tsxにProviderを設置しますが、サンプルの独立性を考慮してここにProviderを設置しています。
  <Provider store={store}>
    <Section02ReduxHoc />
  </Provider>
);

export default Section02ReduxHocContainer;
