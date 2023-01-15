import { Flex, Spinner } from '@chakra-ui/react';
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { GetNewsData } from '../API/APIfetcher'
import NewsCard from '../Components/NewsCard';
import Pagination from '../Components/Pagination';

const News = () => {

  const{data, isLoading, status} = GetNewsData();

  const newsData = useSelector((state) => state.fetchReducer.newsData);

  // pagination
  const [currentPage , setCurrentPage] = useState(1);
  let postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const newData = newsData.slice(firstPostIndex, lastPostIndex);


  return (
    <>
      <Flex w={'90%'} m={'auto'} gap={'1rem'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} p={'1rem'}>
          
          {
            (isLoading) ? 
            <Flex w={'full'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
              <Spinner/>
            </Flex> :

            newData.map((newsData, index) => {
              return <NewsCard key = {index} {...newsData}/>
            })

          }

          <Pagination totalPages={newsData.length} postsPerpage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </Flex>

    </>
  )
}

export default News
