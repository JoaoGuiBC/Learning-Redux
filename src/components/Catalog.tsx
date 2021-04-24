import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import api from "../services/api";
import { formatter } from '../utils/formatter';

import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <Flex flexDirection="column" align="center" justify="center">
      <Heading fontSize="4xl" py="5">Catalog</Heading>

      <Flex flexWrap="wrap" align="center" justify="center" px="10" >
        {catalog.map(product => (
          <Flex
            as="article"
            key={product.id}
            flexDir="column"
            align="center"
            bg="gray.700"
            px="20"
            py="5"
            mx="12"
            my="6"
            borderRadius="10"
          >
            <Image src={product.photo} alt="productImage" boxSize="18rem" objectFit="cover" borderRadius="10" />

            <Flex py="6" w="100%" justify="space-between">
              <Text as="strong" fontSize="22">{product.title}</Text>
              <Text as="span" fontSize="22" color="purple.500">{formatter.format(product.price)}</Text>
            </Flex>

            <Button colorScheme="purple" size="lg">Comprar</Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Catalog;