import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from '../redux/actions/fetchActions'

export default function Home() {

    const[product,setProduct]=useState([])
    const {data,error,cart}=useSelector((state)=>state.api_data)
    const dispatch=useDispatch();
    
        const addCart=(item)=>{
                
                dispatch(addToCart(item));
        }
        const removeCart=(item)=>{
                dispatch(removeFromCart(item));
        }



    useEffect(()=>{
         data &&   setProduct(
                data
            )
           console.log("pt",product);
           // console.log(error);
    },[data]) 
  return <>
           
                <div className='h-full w-ful p-5'>
                        <div className='grid md:grid-cols-3 gap-5'>
                        {
                                        product.map((ele)=>{
                                                return <>
                                                <div className='w-full md:h-[10rem] h-[8rem] border rounded flex gap-[2rem]'>
                                                  <img src={ele.images[0]} alt="" className='md:w-[10rem] md:h-[10rem] w-[8rem] h-[8rem]
                                                        mix-blend-darken                                                  
                                                  rounded' />
                                                <div className='py-3 '>
                                                        <span className='font-semibold'>{ele.title}</span>
                                                        <p className='md:mt-3'>${ele.price} ({ele.discountPercentage}%)</p>
                                                        <div className='py-5 space-x-[2rem]'>
                                                                <button onClick={()=>addCart(ele)}
                                                                className='outline-blue-500 border p-1 rounded '>Add to cart</button>
                                                                <button className='outline-blue-500 border p-1 rounded' >Buy Now</button>
                                                        </div>
                                                </div>
                                                </div>
                                                 
                                                       </>
                                               
                                                
                                        })
                                }
                        </div>
                        
                               

                </div>
        </>
}
