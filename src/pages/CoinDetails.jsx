import { Flex, VStack, HStack, Text, Box, Image, Button } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import CurrencyBtns from '../Components/CurrencyBtns'
import '../css/CoinDetails.css'
import { SingleCoinDetails } from '../API/APIfetcher';
import { useSelector } from 'react-redux';

const CoinDetails = () => {
    const id = useParams();

    const {data, isLoading, status, error} = SingleCoinDetails();

    const currentCoin = useSelector((state) => state.fetchReducer.coinDetail[0]);
    console.log(currentCoin)
    

    return (
        <>
        <Flex w={'100%'} m={'auto'} p={'4'} marginTop={'4rem'} className='main-stack'>

            <VStack className='coin-details-stack' w={'50%'} p={'2rem 4rem'} alignItems={'flex-start'} gap={'2'}>

                <HStack justifyContent={'flex-start'} w={'100%'}>
                    <Box boxSize={'5rem'}>
                        <Image src={currentCoin.image} />
                    </Box>
                    <Text fontSize={'xl'}>{currentCoin.name}</Text>
                </HStack>

                <Text>Current Price: {currentCoin.current_price}</Text>
                <Text>Market Cap Rank: {currentCoin.market_cap_rank}</Text>
                <Text>High(24h): {currentCoin.high_24h}</Text>
                <Text>Price Change(24h): {currentCoin.price_change_24h}</Text>
                <Text>Market Cap Change(24h): {currentCoin.market_cap_change_24h}</Text>
                <Text>Total Supply: {currentCoin.total_volume}</Text>
                <Text>Circulating Supply: {currentCoin.circulating_supply}</Text>
                <Text>All Time High: {currentCoin.ath}</Text>
                <Text>All Time Low: {currentCoin.atl}</Text>

            </VStack>

            <VStack className='coin-details-stack' w={'40%'} p={'2rem 4rem 2rem 0'} alignItems={'flex-start'} gap={'2'} m={'auto'} >

                <HStack justifyContent={'flex-start'} w={'100%'} h={'3.2rem'} marginBottom={'1rem'} className='stack-img'>
                    <Text fontSize={'xl'}>Symbol : {currentCoin.symbol}</Text>
                    <Box boxSize={'1.5rem'}>
                        <Image src={currentCoin.image} />
                    </Box>
                </HStack>

                <Text>Market Cap: {currentCoin.market_cap}</Text>
                <Text>Fully Diluted Valuation: {currentCoin.fully_diluted_valuation}</Text>
                <Text>Low(24h): {currentCoin.low_24h}</Text>
                <Text>Price Change Percentage(24h): {currentCoin.price_change_percentage_24h}</Text>
                <Text>Market Cap Change Percentage(24h): {currentCoin.market_cap_change_percentage_24h}</Text>
                <Text>Max Supply: {currentCoin.max_supply}</Text>
                <Text>Total Volume: {currentCoin.total_volume} </Text>
                <Text>All Time High Change Percentage: {currentCoin.ath_change_percentage} </Text>
                <Text>All Time Low Change Percentage: {currentCoin.atl_change_percentage} </Text>

            </VStack>
        </Flex>

        <CurrencyBtns />

        <Flex justifyContent={'center'} m={'2rem'}>
            <Button>See Chart</Button>
        </Flex>
        
    </>
  )
}

export default CoinDetails
