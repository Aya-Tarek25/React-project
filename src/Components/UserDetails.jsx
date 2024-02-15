import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function UserDetails() {
    const loc = useLocation();
    console.log(loc.state);
    const prams = useParams();
    console.log(prams.id);
    return (
        <div>
            <p>Name:{loc.state.title}</p>
            <p>Description:{loc.state.description}</p>
            <p>Category:{loc.state.category}</p>
            <p>Price:{loc.state.price}</p>
            <p>University:{loc.state.university}</p>
            <img src={loc.state.thumbnail}/>
        </div>
    )
}

export default UserDetails