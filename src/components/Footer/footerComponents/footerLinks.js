import React from "react";
import { FaApple } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

export default function FooterLinks() {
  return (
    <Box pt="10px">
      <Flex align="center" gap="5px" color="#515154" pb='10px'>
        <Box cursor="pointer" _hover={{ color: "blackColor" }}>
          <FaApple />
        </Box>
        <Box fontSize="16px">
          <IoIosArrowForward />
        </Box>
        <Text>Cửa Hàng Trực Tuyến của Apple</Text>
      </Flex>
      <Box></Box>
      <Box>
        <Text>
          Xem thêm cách để mua hàng:{" "}
          <Link href="https://animehay.city/" color="red">
            Tìm cửa hàng bán lẻ
          </Link>{" "}
          gần bạn. Hoặc gọi 1800-1192.
        </Text>
      </Box>
    </Box>
  );
}
