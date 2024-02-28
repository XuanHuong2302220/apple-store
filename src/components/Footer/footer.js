import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { oderOptions } from "./footerDatas";
import FooterRules from "./footerComponents/footerRules";
import FooterLinks from "./footerComponents/footerLinks";



export default function Footer() {
  return (
    <Box w="100%" bgColor="primaryColor">
      <Box>
        <Box ml="120px">
          <Box>
            <Text fontSize="28px" fontWeight="600">
              Liên Kết Nhanh
            </Text>
            <Flex gap="5px" pt="20px">
              {oderOptions.map((oder, index) => {
                return (
                  <Button key={index} borderRadius="20px" bgColor="#E2E2E4">
                    {oder}
                  </Button>
                );
              })}
            </Flex>
            <Box p=" 50px 150px" fontSize="12px">
              <FooterRules />
              <FooterLinks />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
