import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function ProductComponentProductList({
  products,
  translate,
  isTransforming,
  width,
  color,
  height
}) {
  return (
    <Flex
      transform={isTransforming ? `translateX(${translate}px)` : "none"}
      transition="transform 0.8s ease"
    >
      {products.map((prod, index) => (
        <Box
          key={index}
          w={prod.isLogo ? `calc(${width} + 80px)` : width}
          h={height ? height : '490px'}
          pos="relative"
          boxShadow="lg"
          overflow="hidden"
          mb="50px"
          transition="1s"
          _hover={{
            transform: "scale(1.025)",
            boxShadow: "2xl",
          }}
          cursor="pointer"
          mr="20px"
          mt="30px"
          borderRadius="30px"
          bgColor="whiteColor"
        >
          {width === "320px" ? (
            prod.isLogo ? (
              <Box w="100%">
                <Image src={prod.srcLogo} objectFit="cover" w="100%" h="100%" />
                <Box pos="absolute" top="0" color={prod.isColor ? 'whiteColor':'blackColor'} w="400px" p='15px 30px'>
                  <Text fontSize="12px" fontWeight="400">
                    {prod.dateLogo ? prod.dateLogo: null}
                  </Text>
                    <Text
                      
                      lineHeight="1.1"
                      fontSize="28px"
                      fontWeight="600"
                      pt={!prod.date && "20px"}
                      pb='10px'
                    >
                      {prod.nameLogo}
                    </Text>
                    <Text>
                      {prod.desLogo}
                    </Text>
                </Box>
              </Box>
            ) : (
              <Box w="100%">
                <Flex justify="center" pt="80px">
                  <Image src={prod.src} objectFit="cover" w="230px" h="230px" />
                </Flex>
                <Box
                  pos="absolute"
                  top="68%"
                  color="white"
                  w="260px"
                  h="170px"
                  p="30px"
                >
                  <Text fontSize="12px" fontWeight="400" color="red">
                    {prod.date}
                  </Text>
                  <Box
                    whiteSpace="nowrap"
                    isTruncated
                    w="100%"
                    fontSize="17px"
                    fontWeight="600"
                    pt={!prod.date && "20px"}
                    color="blackColor"
                    display="block"
                    pb="20px"
                    numberOfLines={2}
                  >
                    {prod.prodName}
                  </Box>
                  <Text fontSize="14px" color="blackColor">
                    {prod.prodPrice}
                  </Text>
                </Box>
              </Box>
            )
          ) : (
            <Box w="100%">
              <Image src={prod.src} objectFit="cover" w="100%" h="100%" />
              <Box pos="absolute" top="0"  w="400px" p="30px">
                <Text fontSize="12px" fontWeight="400" pt={!prod.date && "20px"} color='whiteColor'>
                  {prod.date}
                </Text>
                <Text fontSize="28px" fontWeight="600" w='430px' color={prod.isColor ? 'whiteColor' : color}>
                  {prod.prodName}
                </Text>
                <Text fontSize="17px" color={color ? color : 'white'}>{prod.prodPrice}</Text >
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
}

