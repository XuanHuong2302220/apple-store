import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import ArrowComponent from "./productComponents/productComponentArrow";
import ProductComponentProductList from "./productComponents/productComponentProductList";

export const Title = ({ color, children }) => {
  return (
    <Text display="inline" color={color}>
      {children}
    </Text>
  );
};

const LEFT_TRANSLATE_AMOUNT = 300;
const PRODUCT_WIDTH_480 = 500;
const PRODUCT_WIDTH_480_length2 = 550;
const PRODUCT_WIDTH_360 = 350;
const CONTAINER_WIDTH = 980;

export default function Products({ width, products, color, height }) {
  const [opacityR, setOpacityR] = useState(0);
  const [opacityL, setOpacityL] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isTransforming, setIsTransforming] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const calculateMaxTranslate = (width, lastProductIndex) => {
    switch (width) {
      case "480px":
        if (lastProductIndex === 2) {
          return (
            -lastProductIndex * PRODUCT_WIDTH_480_length2 + CONTAINER_WIDTH
          );
        } else if (lastProductIndex > 2) {
          return -lastProductIndex * PRODUCT_WIDTH_480 + CONTAINER_WIDTH;
        }
        break;
      case "320px":
        return -lastProductIndex * PRODUCT_WIDTH_360 + CONTAINER_WIDTH;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const lastProductIndex = products.length - 1;
    const maxTranslate = calculateMaxTranslate(width, lastProductIndex);
    if (translate === 0) {
      if (lastProductIndex < 2) {
        setOpacityR(0);
      } else {
        setOpacityR(1);
        setOpacityL(0);
      }
      // Ẩn mũi tên bên trái nếu ở đầu danh sách
    } else if (translate <= maxTranslate) {
      setOpacityL(1);
      setOpacityR(0); // Ẩn mũi tên bên phải nếu ở cuối danh sách
    } else {
      setOpacityL(1);
      setOpacityR(1);
    }
  }, [translate, width, products.length]);

  const handleOnClickRight = () => {
    const lastProductIndex = products.length - 1;
    const maxTranslate = calculateMaxTranslate(width, lastProductIndex);

    if (translate > maxTranslate) {
      setIsTransforming(true);
      setTranslate((prevTranslate) => prevTranslate - LEFT_TRANSLATE_AMOUNT);
    }
  };

  const handleOnClickLeft = () => {
    if (translate < 0) {
      setIsTransforming(true);
      setTranslate((prevTranslate) =>
        Math.min(0, prevTranslate + LEFT_TRANSLATE_AMOUNT)
      );
    }
  };

  return (
    <Box>
      <Flex direction="column" pt="65px" w="100%">
        {products.map((prod, index) => {
          return (
            <Box key={index}>
              {prod.isTitle ? (
                <Box
                  display="block"
                  width={`${CONTAINER_WIDTH}px`}
                  fontSize="28px"
                  fontWeight="600"
                  pb="30px"
                  pl="120px"
                >
                  <Title color="textColor1">{prod.title1}</Title>
                  <Title color="textColor2">{prod.title2}</Title>
                </Box>
              ) : null}
            </Box>
          );
        })}
        <Box
          display="inline-flex"
          w="100%"
          overflowX="hidden"
          overscrollBehaviorX="contain"
          verticalAlign="top"
          h="100%"
          pl="120px"
          position="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={containerRef}
        >
          <ProductComponentProductList
            products={products}
            translate={translate}
            isTransforming={isTransforming}
            width={width}
            color={color}
            height={height}
          />

          <ArrowComponent
            opacity={isHovering ? opacityL : 0}
            onClick={handleOnClickLeft}
            left="18px"
          >
            <MdKeyboardArrowLeft />
          </ArrowComponent>

          <ArrowComponent
            right="18px"
            opacity={isHovering ? opacityR : 0}
            onClick={handleOnClickRight}
          >
            <MdKeyboardArrowRight />
          </ArrowComponent>
        </Box>
      </Flex>
    </Box>
  );
}
