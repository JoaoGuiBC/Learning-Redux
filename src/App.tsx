import { useSelector } from 'react-redux';

import Catalog from './components/Catalog';

function App() {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return (
    <Catalog />
  );
}

export default App;
