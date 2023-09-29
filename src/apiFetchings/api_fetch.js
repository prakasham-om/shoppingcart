import { apiFetch,fetchFailed,fetchSuccess } from "../redux/actions/fetchActions";
import store from "../redux/store/store";

const api_fetch=async()=>{
    
    try{
        const res=await ((await fetch('https://dummyjson.com/products')).json());
        store.dispatch(fetchSuccess(res.products))
       // console.log(res);
    }
    
    catch(err){
        console.log(err);
        store.dispatch(fetchFailed(err))
    }
}

export default api_fetch;