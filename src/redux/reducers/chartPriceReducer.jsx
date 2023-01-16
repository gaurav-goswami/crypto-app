import React from "react";
import action_type from "../constants/constant";

const initialState = {
    day_value : 1,
    chart_price : []
}

const chartPriceReducer = (state = initialState, action) => {

    switch(action.type){

        case action_type.getDays:
            return{
                ...state,
                day_value : action.payload
            }
        case action_type.getSingleChartPrice:
            return{
                ...state,
                chart_price : action.payload
            }


        default:
            return state;
    }

}

export default chartPriceReducer