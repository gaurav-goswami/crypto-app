import { Flex, VStack, HStack, Text, Box, Image, Button, Spinner } from '@chakra-ui/react';
import React from 'react'
import CurrencyBtns from '../Components/CurrencyBtns'
import '../css/CoinDetails.css'
import { SingleCoinDetails } from '../API/APIfetcher';
import { useSelector } from 'react-redux';

const CoinDetails = () => {

    const {data, isLoading, status, error} = SingleCoinDetails();

    const currentCoinDetail = useSelector((state) => state.fetchReducer.coinDetail[0]);
    
    // currency symbol
    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);
    let symbol = '$';
    (currencyType == 'inr') ? symbol = '₹' : (currencyType == 'eur') ? symbol = '€' : (currencyType == 'jpy') ? symbol = '¥' : (currencyType == 'gbp') ? symbol = '£' : symbol = '$';

    return (
        <>
        <Flex w={'100%'} m={'auto'} p={'4'} marginTop={'4rem'} className='main-stack'>

        
            {
                (isLoading) ? 

                <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'100vh'}> <Spinner/>  </Flex> :

            <>

                
                <VStack className='coin-details-stack' w={'50%'} p={'2rem 4rem'} alignItems={'flex-start'} gap={'2'}>

                    <HStack justifyContent={'flex-start'} w={'100%'}>
                        <Box boxSize={'5rem'}>
                            <Image src={currentCoinDetail.image} />
                        </Box>
                        <Text fontSize={'xl'}>{currentCoinDetail.name}</Text>
                    </HStack>

                    <Text>Current Price: {symbol}{ (currentCoinDetail.current_price) ? currentCoinDetail.current_price : 'Null'}</Text>
                    <Text>Market Cap Rank: { (currentCoinDetail.market_cap_rank) ? currentCoinDetail.market_cap_rank : 'Null'}</Text>
                    <Text>High(24h): {symbol}{ (currentCoinDetail.high_24h) ? currentCoinDetail.high_24h : 'Null'}</Text>
                    <Text>Price Change(24h): {symbol}{ (currentCoinDetail.price_change_24h) ? currentCoinDetail.price_change_24h : 'Null'}</Text>
                    <Text>Market Cap Change(24h): {symbol}{ (currentCoinDetail.market_cap_change_24h) ? currentCoinDetail.market_cap_change_24h : 'Null'}</Text>
                    <Text>Total Supply: { (currentCoinDetail.total_supply) ? currentCoinDetail.total_supply : 'Null'}</Text>
                    <Text>Circulating Supply: { (currentCoinDetail.circulating_supply) ? currentCoinDetail.circulating_supply : 'Null'}</Text>
                    <Text>All Time High: {symbol}{ (currentCoinDetail.ath) ? currentCoinDetail.ath : 'Null'}</Text>
                    <Text>All Time Low: {symbol}{ (currentCoinDetail.atl) ? currentCoinDetail.atl : 'Null'}</Text>

                </VStack>

            
                

                <VStack className='coin-details-stack' w={'40%'} p={'2rem 4rem 2rem 0'} alignItems={'flex-start'} gap={'2'} m={'auto'} >

                    <HStack justifyContent={'flex-start'} w={'100%'} h={'3.2rem'} marginBottom={'1rem'} className='stack-img'>
                        <Text fontSize={'xl'}>Symbol : {currentCoinDetail.symbol}</Text>
                        <Box boxSize={'1.5rem'}>
                            <Image src={currentCoinDetail.image} />
                        </Box>
                    </HStack>

                    <Text>Market Cap: {symbol}{ (currentCoinDetail.market_cap) ?  currentCoinDetail.market_cap : 'Null'}</Text>
                    <Text>Fully Diluted Valuation: {symbol}{ (currentCoinDetail.fully_diluted_valuation) ?  currentCoinDetail.fully_diluted_valuation : 'Null'}</Text>
                    <Text>Low(24h): {symbol}{ (currentCoinDetail.low_24h) ?  currentCoinDetail.low_24h : 'Null'}</Text>
                    <Text>Price Change Percentage(24h): { (currentCoinDetail.price_change_percentage_24h) ?  currentCoinDetail.price_change_percentage_24h : 'Null'}%</Text>
                    <Text>Market Cap Change Percentage(24h): { (currentCoinDetail.market_cap_change_percentage_24h) ?  currentCoinDetail.market_cap_change_percentage_24h : 'Null'}%</Text>
                    <Text>Max Supply: { (currentCoinDetail.max_supply) ?  currentCoinDetail.max_supply : 'Null'}</Text>
                    <Text>Total Volume: {symbol}{ (currentCoinDetail.total_volume) ?  currentCoinDetail.total_volume : 'Null'} </Text>
                    <Text>All Time High Change Percentage: { (currentCoinDetail.ath_change_percentage) ?  currentCoinDetail.ath_change_percentage : 'Null'}% </Text>
                    <Text>All Time Low Change Percentage: { (currentCoinDetail.atl_change_percentage) ?  currentCoinDetail.atl_change_percentage : 'Null'}% </Text>

                </VStack>
            </>

            }

            
        </Flex>

        <CurrencyBtns />

        <Flex justifyContent={'center'} m={'2rem'}>
            <Button>See Chart</Button>
        </Flex>
        
    </>
  )
}

export default CoinDetails
