import React, { useState } from "react";
import CoinCard from "../Components/CoinCard";
import '../css/Cryptocurrency.css';
import { GetCoinsData } from "../API/APIfetcher";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, HStack, Spinner } from "@chakra-ui/react";
import CurrencyBtns from "../Components/CurrencyBtns";
import { getPageNumber } from "../redux/actions/actions";


const Cryptocurrency = () => {

  const dispatch = useDispatch();

  // pagination
  const [page, setPage] = useState(1);
  const changePage = (page) => {
    if(page <= 1){
      setPage(1)
    }else{
      setPage(page);
    }
    dispatch(getPageNumber(page));
  }

  // currency type 

  
  const { data , isLoading, status, error } = GetCoinsData();

  const cryptoCoins = useSelector((state) => state.fetchReducer.coinsData);
 
  return (
    <>
      <CurrencyBtns />

      <div className="crypto-card-container">
      {
        (isLoading) ? 
        <Flex w={'full'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
          <Spinner/>
        </Flex> :
        cryptoCoins.map((currentCoin) => {
          return <CoinCard key = {currentCoin.id} {...currentCoin}/>
        })
      }   
      </div>

      <HStack w={'60%'} m={'1rem auto'} overflowX={'auto'} h={'10vh'} justifyContent={'center'}>
        <Button onClick={() => changePage(page-1)} >Prev</Button>
        <Button onClick={() => changePage(page+1)} >Next</Button>
      </HStack>
    </>
  )
}

export default Cryptocurrency
