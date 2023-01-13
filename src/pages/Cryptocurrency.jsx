import React, { useState } from "react";
import CoinCard from "../Components/CoinCard";
import '../css/Cryptocurrency.css';
import { GetCoinsData } from "../API/APIfetcher";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import CurrencyBtns from "../Components/CurrencyBtns";


const Cryptocurrency = () => {

  // pagination
  const [currentPage , setCurrentPage] = useState(1);
  let postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // currency type 

  
  const { data , isLoading, status, error } = GetCoinsData();


  // check for caching

  // console.log('status is ' , status);
  // console.log('isLoading ' , isLoading);
  // console.log('data is ' , data);
  // console.log('error' , error);


  const cryptoCoins = useSelector((state) => state.fetchReducer.coinsData);

  const newCryptoCoins = cryptoCoins.slice(firstPostIndex, lastPostIndex);
 
  return (
    <>
      <CurrencyBtns />

      <div className="crypto-card-container">
      {
        (isLoading) ? <Spinner/> :
        newCryptoCoins.map((currentCoin) => {
          return <CoinCard key = {currentCoin.id} {...currentCoin}/>
        })
      }   
      </div>
      <Pagination totalPages={cryptoCoins.length} postsPerpage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}

export default Cryptocurrency
