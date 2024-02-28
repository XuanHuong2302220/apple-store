import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import { Box} from "@chakra-ui/react";

export default function DefaultPage({children}) {
  return (
    <Box>
        <Navbar/>
        {children}
        <Footer/>
    </Box>
  )
}
