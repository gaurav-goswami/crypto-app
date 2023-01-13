import action_type from "../constants/constant";

const initialState = {
    selected_currency : 'usd'
}

export const currencyTypeReducer = (state = initialState , action) => {
    switch(action.type){

        case action_type.getCurrencyType:
            return{
                ...state,
                selected_currency : action.payload
            }
        default:
            return state;
    }
}