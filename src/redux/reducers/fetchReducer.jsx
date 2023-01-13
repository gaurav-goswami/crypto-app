import action_type from "../constants/constant";

const initialState = {
    coinsData : [],
    exchangesData : []
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

        default:
            return state
    }
}
