import axios from "axios";
import { useQuery } from "react-query";
import { fetchCoins, fetchExchanges, getCoinDetail } from "../redux/actions/actions";
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


    const {data, isLoading , status} = useQuery('cryptoExchanges' , () => exchangesFetcher(`https://api.coingecko.com/api/v3/exchanges`),{
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