import React from "react";
import { Box } from "@chakra-ui/react";

export default function ArrowComponent  ({ children, right, opacity, onClick, left }) {
    
    return (
      <Box
        right={right}
        left={left}
        position="absolute"
        top="45%"
        fontSize="53px"
        borderRadius="50%"
        bgColor="rgba(0,0,0,.2)"
        color="white"
        cursor="pointer"
        _hover={{
          bgColor: "rgba(210,210,215,.64)",
          color: "rgba(0,0,0,.56)",
        }}
        opacity={opacity}
        transition="opacity 0.8s ease"
        onClick={onClick}
      >
        {children}
      </Box>
    );
  }