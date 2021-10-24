// Desc: 本来はrootのindex.tsxでconfigureStore, Provider, counterSliceをimportしますが、サンプルの独立性を考慮してorganismのcontainerでimportしています。
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { counterSlice } from 'stores/riakuto-chapter11-section04/features/counter';
import Section04ReduxToolkitToDoList from 'components/riakuto-chapter11/organisms/Section04ReduxToolkitToDoList';

// Desc: 本来はrootのindex.tsxでtsxでconfigureStore()しますが、サンプルの独立性を考慮してorganismのcontainerでimportしています。
const store = configureStore({ reducer: counterSlice.reducer });

const Section04ReduxToolkitToDoListContainer: React.VFC = () => (
  // Desc: 本来はrootのindex.tsxにProviderを設置しますが、サンプルの独立性を考慮してここにProviderを設置しています。
  <Provider store={store}>
    <Section04ReduxToolkitToDoList />
  </Provider>
);

export default Section04ReduxToolkitToDoListContainer;
