
import React, {useEffect, useRef } from "react";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

export function Title({ children }) {
  return (
    <Text fontSize="12px" color="GrayText" mb="10px" cursor="default">
      {children}
    </Text>
  );
}

export default function NavbarMenu({ data, sendHeight }) {
  const productRef = useRef(null);

  useEffect(() => {
    if (productRef.current) {
      sendHeight(productRef.current.offsetHeight);
    }
  }, [sendHeight]);

  const [product, ...catalog] = data;

  // console.log(height)

  return (
    <VStack ref={productRef} pb='100px'>
      <Container maxW="996px" h="100%" mt="30px">
        <Flex gap="60px">
          <Flex direction="column">
            <Title>{product.title}</Title>
            {product.product &&
              product.product.map((prod, key) => {
                return (
                  <Box
                    fontSize="25px"
                    fontWeight="600"
                    key={key}
                    cursor="pointer"
                  > 
                    {prod}
                  </Box>
                );
              })}
            {product.specials &&
              product.specials.map((spec, key) => {
                return <Box key={key}>{spec}</Box>;
              })}
          </Flex>
          {catalog.map((cata) => {
            return (
              <Flex direction="column" fontSize="12px" key={cata.title}>
                <Title>{cata.title}</Title>
                {cata.links.map((link, key) => {
                  return (
                    <Box key={key} py="7px" cursor="pointer">
                      {link}
                    </Box>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Container>
    </VStack>
  );
}
