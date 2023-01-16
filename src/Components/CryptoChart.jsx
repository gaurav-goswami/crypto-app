import React from 'react'
import { Flex, VStack } from '@chakra-ui/react';
import DaysBtns from './DaysBtns';
import { GetChartData } from '../API/APIfetcher';
import { useSelector } from 'react-redux';
import CurrencyBtns from './CurrencyBtns';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import '../css/CryptoChart.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CryptoChart = () => {
    const {data, isLoading, status} = GetChartData();

    let chartPrices = useSelector((state) => state.chartPriceReducer.chart_price.prices);
    if (isLoading) {
     chartPrices = []
    }

    const days = useSelector((state) => state.chartPriceReducer.day_value);

    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);

    let symbol = '$';
  
    (currencyType == 'inr') ? symbol = '₹' : (currencyType == 'eur') ? symbol = '€' : (currencyType == 'jpy') ? symbol = '¥' : (currencyType == 'gbp') ? symbol = '£' : symbol = '$';
    

    const price = [];
    const date = [];

    for(let i =0 ; i<chartPrices.length; i++){
        date.push(new Date(chartPrices[i][0]).toLocaleString());
        price.push(chartPrices[i][1]);
    }
    

    const priceData = {
        labels: date,
        datasets : [{
            label: `price in ${symbol}`,
            data : price,
            backgroundColor: 'rgba(255,200,132,0.8)'
        }]
    }

    return(
        <>
        <Flex w={'100%'} margin={'1rem auto'} className='chart'>
            <Line 
                className='line-chart'
                options={{ 
                    responsive : true
                 }}

                 data = {priceData}
            />
        </Flex>

        <VStack m={'1rem'}>
            <DaysBtns />
            <CurrencyBtns />
        </VStack>
        </>
    )
    
}
export default CryptoChart