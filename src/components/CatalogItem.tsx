import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

import { IProduct } from "../store/modules/cart/types";

import { addProductToCart } from "../store/modules/cart/actions";

import { formatter } from '../utils/formatter';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);

  return (
    <Flex
      as="article"
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
        <Text as="span" fontSize="22" color="purple.500" userSelect="none">
          {formatter.format(product.price)}
        </Text>
      </Flex>

      <Button
        colorScheme="purple"
        size="lg"
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </Button>
    </Flex>
  );
}

export default CatalogItem;