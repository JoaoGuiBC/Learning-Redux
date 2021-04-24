import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

import { formatter } from "../utils/formatter";

export const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <Table mx="4" my="6" flex="2" colorScheme="whiteAlpha" variant="striped">
      <Thead>
        <Tr>
          <Th color="purple.400">Produto</Th>
          <Th color="purple.400">Preço</Th>
          <Th color="purple.400">Quantidade</Th>
          <Th color="purple.400">Subtotal</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cart.map(item => (
          <Tr key={item.product.id}>
            <Td>{item.product.title}</Td>
            <Td>{formatter.format(item.product.price)}</Td>
            <Td>{item.quantity}</Td>
            <Td>{formatter.format(item.product.price * item.quantity)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
