import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import api from "../services/api";
import { formatter } from '../utils/formatter';

import { IProduct } from "../store/modules/cart/types";
import { addProductToCart } from "../store/modules/cart/actions";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <Flex flexDirection="column" align="center" justify="center" flex="3">
      <Heading fontSize="4xl" py="5">Catalog</Heading>

      <Flex flexWrap="wrap" align="center" justify="center" px="5" >
        {catalog.map(product => (
          <Flex
            as="article"
            key={product.id}
            flexDir="column"
            align="center"
            bg="gray.700"
            px="18"
            py="5"
            mx="1"
            my="4"
            borderRadius="10"
          >
            <Image
              src={product.photo}
              alt="productImage"
              boxSize="18rem"
              objectFit="cover"
              borderRadius="10"
            />

            <Flex py="6" w="100%" justify="space-between">
              <Text as="strong" fontSize="22">{product.title}</Text>
              <Text as="span" fontSize="22" color="purple.500">
                {formatter.format(product.price)}
              </Text>
            </Flex>

            <Button
              colorScheme="purple"
              size="lg"
              type="button"
              onClick={() => handleAddProductToCart(product)}
            >
              Comprar
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Catalog;