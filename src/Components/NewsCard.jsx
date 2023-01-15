import { Flex, VStack, Box, Image, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import '../css/NewsCard.css'

const NewsCard = ({title , url, urlToImage, description, publishedAt}) => {
  return (
    <>
        <Flex w={'38rem'} marginTop={'1rem'}  bg={'rgba(10,10,10,0.1)'} p={'0 .2rem'} className='news-box'>

            <VStack w={'70%'} h={'100%'} p={'.3rem'} className='news-box-1'>
                <Text fontSize={'md'}>{title}</Text>

                <Text fontSize={'sm'}>{description}</Text>

                <HStack justifyContent={'flex-start'} w={'100%'}>
                    <Text textAlign={'left'}>Published At: {publishedAt}</Text>
                </HStack>

                <Button>
                    <a href={url} target={'_blank'}>Read Full Article</a>
                </Button>
            </VStack>

            <VStack w={'30%'} className='news-box-2'>
                <Box boxSize={'100%'} h={'100%'} bg={'rgba(100,100,100,0.04)'}>
                    <Image objectFit={'cover'} h={'100%'} src = {urlToImage} alt = 'image not found' textAlign={'center'} />
                </Box>
            </VStack>

        </Flex>
    </>
  )
}

export default NewsCard
