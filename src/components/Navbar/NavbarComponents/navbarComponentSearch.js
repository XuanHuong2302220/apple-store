import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useRef, useEffect } from "react";
import { VStack, Container, Flex, Box, Input } from "@chakra-ui/react";
import { linkSearch } from "../navbarDatas";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NavbarComponentSearch() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <VStack pb="100px">
      <Container maxW="996px" h="100%" mt="30px">
        <Flex gap="60px">
          <Flex direction="column">
            <Flex align="center" fontSize="20px" color="#757575">
              <Box>
                <IoIosSearch />
              </Box>
              <Input
                ref={inputRef}
                placeholder="Tìm kiếm trên apple.com"
                size="md"
                variant="unstyled"
                fontSize="20px"
                padding="0 5px"
                fontWeight="600"
              />
            </Flex>
            <Flex direction="column" fontSize="12px" mt="30px" p="10px 0" >
              <Box color="#757575" mb="5px">
                Liên Kết Nhanh
              </Box>
              {linkSearch.map((search, index) => {
                return (
                  <Flex
                    align="center"
                    key={index}
                    m="5px 0"
                    gap="10px"
                    cursor="pointer"
                    _hover={{
                      color:'#ccc',
                    }}
                    w='100%'
                    justify='flex-start'
                  >
                    <Box >
                      <FaArrowRightLong />
                    </Box>
                    <Box fontWeight="500">{search}</Box>
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
