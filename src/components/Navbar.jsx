import {useState,useEffect} from 'react'
import store from '../redux/store/store';
import { inputOnchange } from '../redux/actions/fetchActions';
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'
import { useDispatch ,useSelector} from 'react-redux';
const Navbar = () => {
  const {data,error,cart}=useSelector((state)=>state.api_data)
  const[input,setInput]=useState('')
  const dispatch=useDispatch();
  const handleOnchange=(event)=>{
    setInput(event.target.value)
   dispatch(inputOnchange(input))//
  } 

    
  


 
  return (
    <>
      <div className='flex bg-slate-100 sticky top-0 py-2  w-full justify-between px-5 '>
               <div className='flex gap-5 items-center'>
                <h1>Scart</h1>
                <div className='flex bg-slate-200 rounded-full p-2 items-center gap-3'>
                    <span><AiOutlineSearch/></span>
                    <input type='text' onChange={handleOnchange} value={input}
                    className='h-full bg-slate-200 p-1 outline-none'/>
                    
                    <button  className='border-l-[1px] border-slate-500 px-3'
                    onClick={()=>{setInput('')}}
                    >X</button>    
                </div>
               </div>
             
               <div className='flex items-center gap-5 text-2xl'>
                  <div className='flex '>
                    <span ><AiOutlineShoppingCart/></span><sup className='text-blue-400 ml-[-0.4rem] mt-[.4rem]'>{cart.length}</sup>
                  
                  </div>
                    <span className='h-[2rem] w-[2rem] bg-red-500 rounded-full text-center' >
                        P
                    </span>
               </div>
        </div>
    </>
  )
}

export default Navbar