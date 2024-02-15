import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
function Auth() {
    const loc = useLocation();
    console.log(loc.pathname);
    const flag = localStorage.getItem('token');
    return (
        flag == 'true' ? <Outlet /> : <Navigate to='/login' state={loc.pathname} />

    )
}

export default Auth