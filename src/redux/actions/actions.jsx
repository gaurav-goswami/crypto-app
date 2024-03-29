import action_type from "../constants/constant"

export const fetchCoins = (data) => {
    return{
        type : action_type.getAllCoins,
        payload : data
    }
}

export const fetchExchanges = (data) => {
    return{
        type : action_type.getAllExchanges,
        payload : data
    }
}

export const getCurrencyType = (data) => {
    return{
        type : action_type.getCurrencyType,
        payload : data
    }
}

export const getPageNumber = (data) => {
    return{
        type: action_type.getPageNumber,
        payload : data
    }
}

export const getCoinId = (data) => {
    return{
        type: action_type.getCoinId,
        payload : data
    }
}

export const getCoinDetail = (data) => {
    return{
        type: action_type.getCoinDetails,
        payload: data
    }
}

export const getError = (data) => {
    return{
        type: action_type.getError,
        payload : data
    }
}

export const getNewsData = (data) => {
    return{
        type : action_type.getNewsData,
        payload : data
    }
}


export const getDays = (data) => {
    return{
        type: action_type.getDays,
        payload: data
    }

}

export const getChartPrice = (data) => {
    return{
        type: action_type.getSingleChartPrice,
        payload: data
    }
}