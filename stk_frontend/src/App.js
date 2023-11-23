import React, { StrictMode } from 'react'
//import './App.css'



import Home from './Project/Home';
import Header from './Project/Header';
import Login from './Project/Login';
import SignUp from './Project/Signup';
import RegistrationForm from './Project/RegistrationForm';
//import profilepage from './Project/profilepage';
import Footer from './Project/Footer'; 
import Aboutus from './Project/Aboutus';
import Product from './Project/Product';
import Order from './Project/Order';
import Purchase from './Project/Purchase';
import Supplier from './Project/Supplier';
import Feedback from './Project/Feedback';

import{BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
//import StockAvailability from './Project/Product';
//import Footer from './Project/Footer';
function App(){
  return(
    <BrowserRouter>
    <Header/>
    
      
<Routes>
    <Route path="/Product" element={<Product/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Signup" element={<SignUp/>}/>
   <Route path="/RegistrationForm" elment={<RegistrationForm/>}/>  
   <Route path="/Home" element={<Home/>}/>
    {/* <Route path="/profilepage" element={<profilepage/>}/>  */}
   <Route path="/Footer" element={<Footer/>}/>
   <Route path="/Aboutus" element={<Aboutus/>}/>
   <Route path="/Order" element={<Order/>}/>
   <Route path="/Purchase" element={<Purchase/>}/>
   <Route path="/Supplier"element={<Supplier/>}/>
   <Route path="/Feedback" element={<Feedback/>}/>
  {/* <Route path="/MainPage" element={<MainPage/>}/> */} */
  
   
</Routes>
</BrowserRouter>
  );
}
export default App;