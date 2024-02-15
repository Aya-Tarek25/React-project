import React from 'react'
import { addToCart } from '../Redux/slices/productSlice';
import { removeFromCart } from '../Redux/slices/productSlice';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import $ from 'jquery';

function UserCard({ data }) {
    const nav = useNavigate();
    const dispatch = useDispatch();
    // if (data.quantity === null) {
    //     $('#qua').fadeOut(500);
    // }
    function go() {
        nav(`/userdetails/${data.id}`, { state: data });
        
      
    }
    function add() {
        // nav(`/userdetails/${data.id}`, { state: data });
        
        dispatch(addToCart(data));
       
        
    }
    function remove() {
        // nav(`/userdetails/${data.id}`, { state: data });
        
        dispatch(removeFromCart(data));
    }
   
    return (
       <div className='mycards'>
        <div className="card" >
            <img className="card-img-top" src={data.thumbnail} />
            <div className="card-body">
                <p className="card-title"><span className='font'>Name: </span> {data.title}</p>
                <p className="card-title">  <span className='font'>Category: </span>{data.category}</p>
                <p className="card-title"><span className='font'>Price: </span> {data.price}</p>
                <p  className="card-title"><span className='font' id='qua'>Quantity: </span>{data.quantity}</p>
                <button className="btn btn-primary" onClick={go}>Details</button>
                <button className="btn btn-primary" onClick={add}>Add</button>
                <button className="btn btn-primary" onClick={remove}>Remove</button>
               
            </div>
            </div>
        </div>
    )
}

export default UserCard