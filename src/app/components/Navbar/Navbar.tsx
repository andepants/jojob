'use client'
import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  return (
    <>
      <Flex bg="white" height='44px' padding='6px 12px'>
        <Flex align='center'>
          <Image src='Images/logo.png' height='30px' alt='logo' padding='2px'/>
          <Text display={{ base: 'none', md: 'unset'}}>jojob</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar;
