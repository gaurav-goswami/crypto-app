import action_type from "../constants/constant";

const initialState = {
    coinsData : [],
    exchangesData : [],
    coinDetail : [],
    newsData : [],
    isError : false
}

export const fetchReducer = (state = initialState , action) => {
    switch(action.type){
        case action_type.getAllCoins:
            return{
                ...state,
                coinsData : action.payload
            }
        case action_type.getAllExchanges:
            return{
                ...state,
                exchangesData : action.payload
            }
        case action_type.getCoinDetails:
            return{
                ...state,
                coinDetail : action.payload
            }
        case action_type.getNewsData:
            return{
                ...state,
                newsData : action.payload
            }

        case action_type.getError:
            return{
                ...state,
                isError : true
            }

        default:
            return state
    }
}
