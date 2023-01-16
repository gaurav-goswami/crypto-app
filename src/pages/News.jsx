import React from 'react'
import { Flex, Spinner, Text } from '@chakra-ui/react'
import { GetNewsData } from '../API/APIfetcher';
import { useSelector } from 'react-redux';
import NewsCard from '../Components/NewsCard'

const News = () => {

    let {data, isLoading, status, error} = GetNewsData();
    let newsData = useSelector((state) => state.fetchReducer.newsData.articles);

    if(isLoading){
        newsData = [];
    }

    const isError = useSelector((state) => state.fetchReducer.isError);

  return (
    <>
        <Flex w={'90%'} m={'auto'} gap={'1rem'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} p={'1rem'}>
            
            {
                (isLoading) ? 
                <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                    <Spinner color={'red'}/>
                </Flex>
                : (isError) ? 
                <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                    <Text color = {'red'}>Error while fetching Data</Text>
                </Flex>
                 : 
                newsData.map((elem , index) => {
                    return <NewsCard key = {index} {...elem}/>
                })
            }

        </Flex>
    </>
  )
}

export default News
