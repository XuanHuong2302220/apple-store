import React from 'react'
import StoreHome from '../../components/Home/StoreHome'
import { Box} from "@chakra-ui/react";
import DefaultPage from '../DefaultPage/DefaultPage';

export default function StorePage() {
  return (
    <Box>
        <DefaultPage>
        <StoreHome />
        </DefaultPage>
    </Box>
  )
}
