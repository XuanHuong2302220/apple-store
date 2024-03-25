import React, { useState } from "react";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import NavbarMenu from "./NavbarComponents/navbarMenuStore";
import NavbarComponentSearch from "./NavbarComponents/navbarComponentSearch";
import { navDatas, navs, search_cart } from "./navbarDatas";
import NavbarComponentCart from "./NavbarComponents/navbarComponentCart";

export default function Navbar() {
  console.log("hello xuan huong nha");
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(null);
  const [indexIcon, setIndexIcon] = useState(null);

  const handleHeightChange = (height) => {
    setHeight(height);
  };

  // console.log(in)
  return (
    <Box w="100%" h="43px" position="relative">
      <VStack w="100%" h="100%">
        <Container maxW="996px" h="100% ">
          <Flex
            alignItems="center"
            justifyContent="space-around"
            gap="30px"
            h="43px"
            pos="relative"
            zIndex="1"
          >
            <Box cursor="pointer" as="span" fontSize="17px">
              <FaApple />
            </Box>

            {navs.map((nav, idx) => (
              <Box
                key={idx}
                onMouseOver={() => setIndex(idx)}
                cursor="pointer"
                fontSize="12px"
              >
                {nav}
              </Box>
            ))}

            <Flex cursor="pointer" gap="30px">
              {search_cart.map((search, index) => (
                <Box
                  key={index}
                  onClick={() => setIndexIcon(index)}
                  onMouseEnter={() => {
                    setIndex(null);
                    setIndexIcon(null);
                  }}
                >
                  {search}
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>
        <Box>
          <Box
            pos="absolute"
            top="43px"
            backgroundColor="#fff"
            display="block"
            w="100%"
            right="0"
            transition="opacity .4s ease-in-out, height .2s ease-in-out"
            zIndex="2"
            opacity={index !== null || indexIcon !== null ? 1 : 0}
            height={index !== null || indexIcon !== null ? height : 0}
            onWheel={() => {
              setIndex(null);
              setIndexIcon(null);
            }}
          >
            {index !== null && (
              <NavbarMenu
                data={navDatas[index]}
                sendHeight={handleHeightChange}
              />
            )}
            {indexIcon === 0 && indexIcon !== null && <NavbarComponentSearch />}
            {indexIcon === 1 && indexIcon !== null && <NavbarComponentCart />}
            <Box
              // display="block"
              opacity={index !== null || indexIcon !== null ? "1" : "0"}
              backdropFilter="blur(20px)"
              pos="absolute"
              onMouseEnter={() => {
                setIndex(null);
                setIndexIcon(null);
              }}
              boxSize="100%"
              top={index !== null || indexIcon !== null ? `${height}px` : "0"}
            ></Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}
