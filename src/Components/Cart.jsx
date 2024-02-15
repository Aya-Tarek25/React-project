import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard';

function Cart() {

    const cart = useSelector(state => state.productReducer.cart);
    console.log(cart);

    return (
        <div className='row'>
            {
                cart.map((item) => {
                    return <div key={item.id} className='col-3 mt-1'> <UserCard data={item} /></div>
                })
            }
        </div>
    )
}

export default Cart