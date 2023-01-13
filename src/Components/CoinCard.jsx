import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import '../css/CoinCard.css'

const CoinCard = ({id,name , image , current_price, market_cap , ath , total_supply}) => {

  const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);

  let symbol = '$';

  (currencyType == 'inr') ? symbol = '₹' : (currencyType == 'eur') ? symbol = '€' : (currencyType == 'jpy') ? symbol = '¥' : (currencyType == 'gbp') ? symbol = '£' : symbol = '$';


  return (
    <>
        <div className="crypto-card">
          <div className="crypto-header">
            <p>{name}</p>
            <div className="crypto-img">
              <img src={image} alt={id} />
            </div>
          </div>

          <div className="crypto-details" bg={''}>
            <p>Current Price : {symbol}{current_price}</p>
            <p>Market Cap : {symbol}{market_cap}</p>
            <p>All time high : {symbol}{ath}</p>
            <p>Total Supply : {(total_supply === null) ? 'Not Known' : total_supply}</p>

            <Button m={'auto'} size={'sm'} border={'none'}>Check Coin</Button>

          </div>
        </div>
    </>
  )
}

export default CoinCard
