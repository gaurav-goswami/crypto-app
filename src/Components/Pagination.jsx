import React from 'react';
import { Button, Flex, HStack } from '@chakra-ui/react';

const Pagination = ({ totalPages, postsPerpage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalPages / postsPerpage); i++) {
    pages.push(i);
  }

  return (
    <Flex m={'3'}>
      <HStack m={'auto'}>
        {pages.map((page, index) => {
          return (
            <Button key={index} onClick={() => setCurrentPage(page)} colorScheme={(page === currentPage) ? 'linkedin' : 'gray'} >
              {page}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default Pagination;
