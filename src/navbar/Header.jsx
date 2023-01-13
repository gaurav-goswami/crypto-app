import React from 'react';
import {Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltRight} from 'react-icons/bi';
import {FiHome} from 'react-icons/fi';
import {AiOutlineAreaChart , AiFillMoneyCollect} from 'react-icons/ai';
import {FaLightbulb} from 'react-icons/fa';


const Header = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button
        pos={'fixed'}
        top={'2'}
        left={'3'}
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        onClick = {onOpen}
        >
            <BiMenuAltRight size = {'20'}/>
        </Button>


        <Drawer isOpen={isOpen} placement={'left'} onClose = {onClose}>

            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>En-Crypto</DrawerHeader>

                <DrawerBody>

                    <VStack alignItems={'flex-start'}>
                        <Button colorScheme={'messenger'} leftIcon={<FiHome />} onClick = {onClose} variant={'ghost'}>
                            <Link to = {'/'}> Home</Link>
                        </Button>
                        <Button colorScheme={'messenger'} leftIcon={<AiFillMoneyCollect />} onClick = {onClose} variant={'ghost'}>
                            <Link to = {'/cryptocurrencies'}>Cryptocurrency</Link>
                        </Button>
                        <Button colorScheme={'messenger'} leftIcon={<AiOutlineAreaChart />} onClick = {onClose} variant={'ghost'}>
                            <Link to = {'/exchanges'}>Exchanges</Link>
                        </Button>
                        <Button colorScheme={'messenger'} leftIcon={<FaLightbulb />} onClick = {onClose} variant={'ghost'}>
                            <Link to = {'/news'}>News</Link>
                        </Button>
                    </VStack>
                </DrawerBody> 
            </DrawerContent>

        </Drawer>
    </>
  )
}

export default Header
