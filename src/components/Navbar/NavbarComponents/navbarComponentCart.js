import React from "react";
import { VStack, Container, Flex, Box, Text } from "@chakra-ui/react";
import {linkCarts } from "../navbarDatas";

export default function NavbarComponentCart() {

  return (
    <VStack pb="100px">
      <Container maxW="996px" h="100%" mt="30px">
        <Flex gap="60px">
          <Flex direction="column">
            <Box fontSize='24px' fontWeight='600' mb = '20px'>Túi của bạn trống</Box>
            <Flex fontSize='12px' gap='3px'>
              <Box cursor ='pointer' color = 'red' textDecor='underline'>Đăng Nhập </Box>
              <Text cursor='default'>để xem bạn có sản phẩm nào đã lưu không</Text>
            </Flex>
            <Flex direction="column" fontSize="12px" mt="30px" p="10px 0">
              <Box color="#757575" mb="5px">
                Hồ sơ của tôi
              </Box>
              {linkCarts.map((cart, index) => {
                return (
                  <Flex
                    align="center"
                    key={index}
                    m="5px 0"
                    gap="10px"
                    cursor="pointer"
                    _hover={{
                      color: "#ccc",
                    }}
                    w="100%"
                    justify="flex-start"
                  >
                    <Box >
                      {cart.icon}
                    </Box>
                    <Box fontWeight="500">{cart.name}</Box>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
}
