import { Box, HStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import '../css/ExchangeCard.css';

const ExchangesCard = ({id, name, image, trust_score, trust_score_rank, url}) => {

  return (
    <>
    
        <a href={url} target={'_blank'} h={'10%'}>

            <HStack w={'100%'} justifyContent={'space-between'} p={'1rem'} backgroundColor={'rgba(0,0,0,0.100)'} borderRadius={'md'} marginTop={'2'} className='exchange-card' >

                <HStack w={'25%'}>
                    <Box boxSize={'30px'} >
                        <Image src={image} alt={id} borderRadius={'full'}/>
                    </Box>
                    <Text fontSize={'sm'}>{name}</Text>
                </HStack>

                <HStack w={'25%'} justifyContent={'center'}>
                    <Text fontSize={'sm'}>{trust_score}</Text>
                </HStack>

                <HStack w={'25%'} justifyContent={'center'} >
                    <Text fontSize={'sm'}>{trust_score_rank}</Text>
                </HStack>

                <HStack w={'25%'} justifyContent={'center'}>
                    <Text fontSize={'sm'}>{name}</Text>
                </HStack>

            </HStack>
        </a>
    </>
  )
}

export default ExchangesCard
