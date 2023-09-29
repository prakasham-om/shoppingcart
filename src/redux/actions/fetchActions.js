export const FETCH_API='FETCH_API';
export const FETCH_SUCCESS='FETCH_SUCCESS';
export const FETCH_FAILED='FETCH_FAILED';
export const INPUT_CHANGE='INPUT_CHANGE'
export const ADD_ITEM='ADD_ITEM'
export const REMOVE_ITEM='REMOVE_ITEM'
export const apiFetch=()=>({
    type:FETCH_API,
})

export const fetchSuccess=(data)=>({
        type:FETCH_SUCCESS,
        data,
})

export const fetchFailed=(error)=>({
    type:FETCH_FAILED,
    error
})

export const inputOnchange=(value)=>({
    type:INPUT_CHANGE,
    payload:value,  
})

export const addToCart=(item)=>({
    type:ADD_ITEM,
    payload:item
})
export const removeFromCart=(item)=>({
    type:REMOVE_ITEM,
    payload:item
})