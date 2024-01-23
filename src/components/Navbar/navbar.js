import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";

export default function Navbar() {
  return (
    <div>
      <Box
        w="100%"
        h="40px"
        bg="primaryColor"
        display="flex"
        alignItems="center"
        justifyContent="center  "
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w="990px"
          fontSize="13px"
          fontWeight="400"
          gap="35px"
          cursor='pointer'
        >
          <Text fontSize="17px" fontWeight="600px" lineHeight="1.2353641176">
            <FaApple />
          </Text>
          <Text>
            Cửa hàng

          </Text>
          <Text>Mac</Text>
          <Text> iPad</Text>
          <Text> iPhone</Text>
          <Text> Watch</Text>
          <Text> AirPods</Text>
          <Text> TV & Nhà</Text>
          <Text> Giải Trí</Text>
          <Text> Phụ Kiện</Text>
          <Text> Hỗ trợ</Text>
          <Box
            fontSize="17px"
            lineHeight="1.2353641176"
            fontWeight="600px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            gap="35px"
          >
            <IoIosSearch />
            <BsBag />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
