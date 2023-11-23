import React from 'react'
import "./Footer.css";
//import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div>
    <div className="foot">
  <h1>Contact Us</h1>
  </div>
  <div className='blur'>
  <div className="row">
  <div className="column">
    <div className="card">
    
      <div className="container">
        <img src='https://logowik.com/content/uploads/images/chat3893.logowik.com.webp'style={{ width: '70px', height: '70px'}}/>
        <h3>Chat</h3>
        <p className="title">Chat specialist hours</p>
        <p>Timing: 9am - 7pm</p> 
        <p>💬: 9465820487
        {/* { <a href='https://www.gmail.com'>martin@example.com</a> } */}
        </p>
    <br></br>
      </div>
    </div>
  </div>

  </div>
  <div className="column">
    <div className="card">
    
      <div className="container">
      <img src='https://cdn-icons-png.flaticon.com/512/2250/2250206.png'style={{ width: '70px', height: '70px'}}/>
        <h3>Send us an email</h3>
        <p className="title">We'd like to hear from you</p>
        <p>Manager: Mrs.Shruthi </p>
        <p>
            📧:
        <a href='https://www.gmail.com'>Shruthi@example.com</a> 
        </p>
        
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
     
      <div className="container">
      <img src='https://www.citypng.com/public/uploads/preview/-51610489202ioxrpnoxox.png'style={{ width: '70px', height: '70px'}}/>
        <h3>Phone</h3>
        <p className="title">We'd like to hear from you</p>
        <p>Timing: 9am - 7pm</p>
        <p>📞:567890980</p>
        {/* <p>📧:
        { <a href='https://www.gmail.com'>aalu@example.com</a> }
        </p> */}
       
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
     
      <div className="container">
      <img src='https://cdn-icons-png.flaticon.com/512/6948/6948631.png'style={{ width: '70px', height: '70px'}}/>
        <h3>Address</h3>
        <p className="title">Please visit us</p>
        <p>Timing: 9am - 7pm</p>
        <p>📍:No.15, Anna Nagar, Coimbatore</p>
        {/* <p>📧:
        { <a href='https://www.gmail.com'>aalu@example.com</a> }
        </p> */}
       
      </div>
    </div>
  </div>
  
  <div className='ccc'>
   
  <h3><center>©Copyright2023StockPortal</center></h3>
  </div>
  </div>
</div> 
    


 



  )
}

export default Footer