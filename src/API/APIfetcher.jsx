import axios from "axios";
import { useQuery } from "react-query";
import { fetchCoins, fetchExchanges, getCoinDetail, getNewsData, getError, getChartPrice } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const GetCoinsData = () => {

    // currency type
    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);

    const page = useSelector((state) => state.currencyTypeReducer.current_page);

    const dispatch = useDispatch();

    const coinFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(fetchCoins(data));
            return data;
        } catch (error) {
            return error;
        }
    }

    const {data , isLoading , status , error} = useQuery(['cryptoCoinsData' , currencyType, page] , () => coinFetcher(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}&per_page=20&page=${page}`), {
        cacheTime : Infinity
    });

    return (
        {data, isLoading, status , error}
    );
}


export const GetExchangesData = () => {


    const dispatch = useDispatch();

    const exchangesFetcher = async (url) => {

        try {
            const {data} = await axios.get(url);
            dispatch(fetchExchanges(data));
            return data;
            
        } catch (error) {
            return error;
        }

    }
    
    const {data, isLoading , status, error} = useQuery('cryptoExchanges' , () => exchangesFetcher(`https://api.coingecko.com/api/v3/exchanges`),{
        cacheTime : Infinity
    })

    return {data, isLoading, status }
    
}


export const SingleCoinDetails = () => {

    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);
    const coinId = useSelector((state) => state.currencyTypeReducer.selected_coin_Id);


    const dispatch = useDispatch();

    const coinDetailFetcher = async (url) => {
        const {data} = await axios.get(url);
        dispatch(getCoinDetail(data));
        return data;
    }

    const {data, isLoading, status, error} = useQuery(['coinDetails', currencyType] , () => coinDetailFetcher(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}&ids=${coinId}`),{
        cacheTime : Infinity
    })

    // console.log('id is ' , id)

    return {data, isLoading, status, error}

}


export const GetNewsData = () => {

    const dispatch = useDispatch();

    const newsFetcher = async (url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getNewsData(data));
            return data;
        } catch (error) {
            dispatch(getError(true))
        }
    }

    const {data, isLoading, status} = useQuery('newsData' , () => newsFetcher(`https://newsapi.org/v2/everything?q=cryptocurrency&from=2023-01-14&to=2023-01-14&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`),{
        cacheTime: Infinity
    })

    return {data, isLoading, status}

}

export const GetChartData = () => {

    const dispatch = useDispatch();

    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);
    const currentCurrencyId = useSelector((state) => state.currencyTypeReducer.selected_coin_Id);
    const days = useSelector((state) => state.chartPriceReducer.day_value);

    
    const chartPriceFetcher = async(url) => {
        try {
            const {data} = await axios.get(url);
            dispatch(getChartPrice(data));
            return data;
        } catch (error) {
            return error;
        }
    }

    const {data, isLoading, status} = useQuery(['chartPrice', currencyType, days] , () => chartPriceFetcher(`https://api.coingecko.com/api/v3/coins/${currentCurrencyId}/market_chart?vs_currency=${currencyType}&days=${days}`),{
        cacheTime: Infinity
    })


    return ({data, isLoading, status})
}