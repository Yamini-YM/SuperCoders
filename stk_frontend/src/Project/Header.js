import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
//import logo from './logo.png';
import {Link} from 'react-router-dom';
//import './header.css';
function Header() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar position="static" style={{background:'transparent', boxShadow:'none', color:'white'}}>
    <Toolbar>
    <h1 style={{color:'black'}}>STOCK MANAGEMENT SYSTEM</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'purple'>
    <Link to="/Home"><Tab label="⌂ Home" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman',}}/></Link>
    <Link to="/Login"><Tab label="🔐 Login" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Aboutus"><Tab label="👤 About Us" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Product"><Tab label="📦 Products" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Order"><Tab label="🛍️ Order" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Purchase"><Tab label="🛒 Purchase" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Supplier"><Tab label="🚛 Supplier" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    <Link to="/Feedback"><Tab label="🛍️ Feedback" sx={{color:'black',textDecoration:'none',fontSize:'100%',fontFamily:'Times New Roman'}}/></Link>
    {/* <Link to="/StockDetails"><Tab label="🏆Stock Details" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/ProductDetails"><Tab label="✍Product Details" sx={{color:'purple',textDecoration:'none',}} /></Link>
    <Link to="/OnlineOrder"><Tab label="Online Order" sx={{color:'purple',textDecoration:'none'}}/></Link> */}
    {/* <Link to="/profilepage"><Tab label="👤 Update Profile" sx={{color:'black',textDecoration:'none',fontSize:'150%',fontFamily:'Times New Roman'}}/></Link> */}
    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default Header