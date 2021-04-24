import { Flex, Heading, } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import api from "../services/api";

import CatalogItem from "./CatalogItem";

import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <Flex flexDirection="column" align="center" flex="3">
      <Heading fontSize="4xl" py="5">Catalog</Heading>

      <Flex flexWrap="wrap" align="center" justify="center" px="5" >

        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}

      </Flex>
    </Flex>
  );
}

export default Catalog;