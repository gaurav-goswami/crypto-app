import React, { useState } from 'react';
import ExchangesCard from '../Components/ExchangesCard';
import { Flex, HStack, Text, Spinner } from '@chakra-ui/react';
import { GetExchangesData } from '../API/APIfetcher';
import { useSelector } from 'react-redux';
import Pagination from '../Components/Pagination';

const Exchanges = () => {
  
  let {data, isLoading, status} = GetExchangesData();
  
  const exchangesData = useSelector((state) => state.fetchReducer.exchangesData);

  // check for cache

  // console.log(data);
  // console.log('status is (exchanges) ' , status);
  // console.log('isLoading (exchanges) ' , isLoading)

  // pagination
  const [currentPage , setCurrentPage] = useState(1);
  let postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const newExchangeData = exchangesData.slice(firstPostIndex, lastPostIndex);
  return (
    <>

    {/* header content */}

      <Flex w={'95%'} m={'3rem auto'} p={'2rem 0'} flexDirection={'column'}>
        {/* exchanges heading */}
        <HStack marginBottom={'2'} h={'8%'} p={'1rem'} backgroundColor={'rgba(30,30,30,0.5)'} borderRadius={'md'}>

          <HStack w={'25%'}>
            <Text fontSize={'sm'}>Exchanges</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Trust_Score</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Rank (T.S)</Text>
          </HStack>

          <HStack w={'25%'} justifyContent={'center'}>
            <Text fontSize={'sm'}>Website</Text>
          </HStack>

        </HStack>

        {/* exchange cards */}

        {
        (isLoading) ? 

        <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'}> <Spinner/>  </Flex>
        :
        newExchangeData.map((currentExchange) => {
          return <ExchangesCard key = {currentExchange.id} {...currentExchange}/>
        })
      } 
      <Pagination totalPages={exchangesData.length} postsPerpage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

      </Flex>
    </>
  )
}

export default Exchanges
