
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import { axiosInstance } from '../axios/instance';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../Redux/slices/productSlice';


function Users() {
    // const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const flag = useSelector(state => state.productReducer.loading);
console.log(products)
    useEffect(() => {
        // axiosInstance.get("https://dummyjson.com/products").then(data => {
            // console.log(data);
            // console.log(data.data.products)
            // setUsers([...data.data.products]);
//})
            dispatch(getproduct());
           
           
    
    }, [])
   
    return (<>
        {
            flag ? <div className="d-flex justify-content-center" >
            <div className="spinner-grow text-info my-5 mydiv" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>: <div className='row'>
                {
                    products.map((item) => {
                        return <div key={item.id} className='col-3 mt-1'> <UserCard data={item} /></div>
                    })
                }
            </div>
        }
    </>

    )
}

export default Users