import { Flex, HStack, VStack , Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    
  return (
    <>
        <Flex bg={'rgba(100,100,100,0.10)'} w={'100%'}>
            
          <HStack w={'100%'} h={'100%'} justifyContent={'center'} flexDirection={'column'}>

            <HStack p={'.2rem'}>
              <Text>EN-CRYPTO</Text>
            </HStack>

            <HStack w={'90%'} p={'.5rem'} className='footer-description'>

              <Text textAlign={'center'}>En-Crypto is a website where you can explore the market and stay up-to-date on the latest developments. Check out charts, market details, and news for various cryptocurrencies and exchanges, and make informed decisions. Thank you for visiting, and we hope you find our resources useful.</Text>

            </HStack>

            <HStack p={'.5rem'}>
              <AiOutlineInstagram fontSize={'1.8rem'} cursor={'pointer'}/>
              <AiOutlineGithub fontSize={'1.8rem'} cursor={'pointer'}/>
              <AiFillLinkedin fontSize={'1.8rem'} cursor={'pointer'}/>
              <a href="mailto:gauravgoswami.aug@gmail.com">
                <AiOutlineMail fontSize={'1.8rem'} cursor={'pointer'}/>
              </a>
            </HStack>

            <HStack p={'.3rem'}>
              <Text>Powered By <a href="https://www.coingecko.com/en/api" target={'_blank'}>CoinGecko API</a></Text>
            </HStack>

          </HStack>

        </Flex>
    </>
  )
}

export default Footer