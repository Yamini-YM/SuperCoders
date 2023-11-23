import { useState } from "react";
import "./Product.css";
import axios from "axios";
function Order() {
  const [inputFields, setInputFields] = useState([
    {
        id:'',
        Title:'',
        ProductId:'',
        NumberShipped:'',
        OrderDate:'',
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        id:'',
        Title:'',
        ProductId:'',
        NumberShipped:'',
        OrderDate:'',
      },
    ]);
  };

  const removeInputFields = (index) => {
    const columns = [...inputFields];
    columns.splice(index, 1);
    setInputFields(columns);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
    axios.post("http://localhost:8080/Order",inputFields)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
    alert("Successfully added");
    // Handle form submission
    // You can perform additional validation or data processing here

    // Show the alert box
    // window.alert("Form submitted successfully!");
  };
  const handleLogin=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/Order",inputFields)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
    alert("Successfully added");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {inputFields.map((data, index) => {
            const {id,Title,ProductId,NumberShipped,OrderDate}= data;
            return (
              <div className="row my-3" key={index}>
                <div className="col">
                  <div className="form-group">
                  <center><h style={{color:'blue',fontSize:'35px',fontFamily:'Times New Roman'}}>Order Details</h></center>
                    <br></br>
                   <label>ID</label>
                   <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={id} name="id" className="form-control"  placeholder="ID" />
                    <br></br>
                    <br></br>
                    <label>Title</label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={Title} name="Title" className="form-control"  placeholder="Title" />
                    <br></br>
                    <br></br>
                    <label>Product Id</label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={ProductId} name="ProductId" className="form-control"  placeholder="ProductId" />
                    <br></br>
                    <br></br>
                    <label>Number Shipped </label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={NumberShipped} name="NumberShipped" className="form-control"  placeholder="NumberShipped" />
                    <br></br>
                    <br></br>
                    <label>Order Date</label>
                    <br></br>
                    
                    <input type="date" onChange={(evnt)=>handleChange(index, evnt)} value={OrderDate} name="OrderDate" className="form-control"  placeholder="OrderDate" />
                    <br></br>
                    <br></br>
                    </div>
                    </div>
                   
                    <div className="col">
                

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">

                    <button style={{color:'white',fontSize:'25px',fontFamily:'Times New Roman',backgroundColor:' #4c75af'}} className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    <button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        
    )
}

export default Order;
