import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./Components/Form";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Auth from "./Components/Auth";
import Cart from "./Components/Cart";
import UserDetails from "./Components/UserDetails";
import './App.css'
import { Route, Routes } from "react-router-dom";



function App() {
  

  return (
    <React.Fragment>
    <Nav />
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Form />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products" element={<Users />} />
    <Route element={<Auth />}>
   
    <Route path="/userdetails/:id" element={<UserDetails  />} />
    
        </Route>
       {/* <Form/>
      <Users/> */}
   </Routes>
   </React.Fragment>
  )
}

export default App
