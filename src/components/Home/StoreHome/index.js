import React from "react";
import { Box,Image, Flex, Text} from "@chakra-ui/react";
import Products from "../../Product/Products";
import bannerIMG from "../../../assets/img/bannerIMG.png";
import expert from "../../../assets/img/expert.jpg";
import { logoIMG } from "./data";
import { musicProducts, privateProducts, products, serviceApple, stuAndEnterprise, supportProducts } from "../../Product/productDatas";
export default function StoreHome() {
  return (
    <Box bgColor="primaryColor" w="100%" h="100%">
      <Box maxW="100%" overflow="hidden">
        <Box mr="-204px" ml="-204px">
          <Image src={bannerIMG} />
        </Box>
      </Box>
      <Box ml="120px">
        <Flex gap="400px" >
          <Flex>
            <Box
              maxW="640px"
              p="80px 0 64px"
              fontSize="48px"
              display="block"
              fontWeight="600"
            >
              <Text color="#9E0D1D" display="inline">
                Cửa Hàng.
              </Text>
              <Text color="#6e6e73" display="inline">
                Cho năm mới ngập tràn niềm vui.
              </Text>
            </Box>
          </Flex>
          <Flex align="center" gap="10px" w="320px" pb="60px">
            <Image src={expert} w="35px" h="35px" borderRadius="50%" />
            <Box fontSize="14px" display="inline">
              <Box fontWeight="600">Bạn cần trợ giúp mua sắm ?</Box>
              <Box
                color="blue.500"
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Hỏi chuyên gia
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Flex>
          {logoIMG.map((logo, index) => {
            return (
              <Box
                h="148px"
                minW="136px"
                p="18px 8px 6px"
                display="block"
                w="146px"
              >
                <Image src={logo.src} key={index} pb="10px" cursor="pointer" />
                <Text
                  textAlign="center"
                  fontWeight="500"
                  fontSize="14px"
                  _hover={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  key={index}
                >
                  {logo.nameProd}
                </Text>
              </Box>
            );
          })}
        </Flex>
        
      </Box>
      <Box>
          <Products width='480px' products={products} color='whiteColor'/>
          <Products width='320px' products={privateProducts}/>
          <Products width='480px' products={supportProducts} color='blackColor'/>
          <Products width="320px" products={musicProducts} />
          <Products width='480px' products={serviceApple} color='blackColor'/>
          <Products width="320px" products={stuAndEnterprise} />
        </Box>
    </Box>
  );
}
