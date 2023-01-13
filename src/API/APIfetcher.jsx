import axios from "axios";
import { useQuery } from "react-query";
import { fetchCoins, fetchExchanges } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";


export const GetCoinsData = () => {

    // currency type
    const currencyType = useSelector((state) => state.currencyTypeReducer.selected_currency);

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

    const {data , isLoading , status , error} = useQuery(['cryptoCoinsData' , currencyType] , () => coinFetcher(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}`), {
        cacheTime : Infinity
    });

    console.log('currency is' , currencyType);

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


    const {data, isLoading , status , error} = useQuery('cryptoExchanges' , () => exchangesFetcher(`https://api.coingecko.com/api/v3/exchanges`))

    return {data, isLoading, status, error}
    
}