import {ADD_ITEM, FETCH_API,FETCH_FAILED,FETCH_SUCCESS,INPUT_CHANGE} from "../actions/fetchActions";

const initialState={
    data:[],
    payload:'',
    cart:[],
    error:null
}

const api_reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case INPUT_CHANGE:
            const filterItem=state.data.filter((item)=>{
            console.log(actions.payload)
            console.log(item)
            return actions.payload !== '' ? item.title.toLowerCase().includes(actions.payload.toLowerCase())
            :item;
        })
    
             return{
                ...state,
                data:filterItem,
                error:null,
                
            }
        case FETCH_SUCCESS:
            
            return {
                ...state,
                data:actions.data,
                payload:'',
                error:null
            }
        case ADD_ITEM:
            return{
                ...state,
                data:[],
                cart:[...state.cart,actions.payload]
            }    
        case 'REMOVE_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== actions.payload.id),
      }
        case FETCH_FAILED:
            return{
                ...state,
                data:[],
                payload:'',
                error:actions.error
            }    
        default :
            return state    
    }
}


export default api_reducer;