import action_type from "../constants/constant";

const initialState = {
    selected_currency : 'usd',
    selected_coin_Id : ''
}

export const currencyTypeReducer = (state = initialState , action) => {
    switch(action.type){

        case action_type.getCurrencyType:
            return{
                ...state,
                selected_currency : action.payload
            }
        case action_type.getCoinId:
            return{
                ...state,
                selected_coin_Id  :action.payload
            }
        default:
            return state;
    }
}