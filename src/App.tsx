import { Provider, useSelector } from 'react-redux';

import store from './store';

import Catalog from './components/Catalog';

function App() {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
