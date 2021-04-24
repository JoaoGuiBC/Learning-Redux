import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { Cart } from './components/Cart';
import Catalog from './components/Catalog';

function App() {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return (
    <Flex>
      <Cart />
      <Catalog />
    </Flex>
  );
}

export default App;
