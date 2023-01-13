import React from 'react';
import ExchangesCard from '../Components/ExchangesCard';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { GetExchangesData } from '../API/APIfetcher';

const ExchangesList = () => {

  return (
    <>

    {/* header content */}

      <Flex w={'95%'} h={'100vh'} m={'3rem auto'} p={'2rem 0'} flexDirection={'column'}>
        {/* exchanges heading */}
        <HStack marginBottom={'2'} h={'8%'} p={'1rem'} backgroundColor={'rgba(30,30,30,0.5)'} borderRadius={'md'}>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Exchanges</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Trust_Score</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Trust_Score_Rank</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Website</Text>
          </HStack>

        </HStack>

        {/* exchange cards */}

        <ExchangesCard />
        <ExchangesCard />

      </Flex>
    </>
  )
}

export default ExchangesList
