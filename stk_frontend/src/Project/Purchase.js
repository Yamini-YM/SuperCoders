import { useState } from "react"
import './Product.css'
import axios from "axios";
function Purchase(){

    const [inputFields, setInputFields] = useState([{
        id:'',
        SupplierId:'',
        ProductId:'',
        NumberReceived:'',
        PurchaseDate:'',
    } ]);
 
    const addInputField = ()=>{

        setInputFields([...inputFields, {
            id:'',
            SupplierId:'',
            ProductId:'',
            NumberReceived:'',
            PurchaseDate:'',
        } ])
      
    }
    const removeInputFields = (index)=>{
        const columns = [...inputFields];
        columns.splice(index, 1);
        setInputFields(columns);
   }
   const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
    axios.post("http://localhost:8080/Purchase",inputFields)
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
    axios.post("http://localhost:8080/Purchase",inputFields)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
    alert("Successfully added");
  };
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {id,SupplierId,ProductId,NumberReceived,PurchaseDate}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <center><h style={{color:'blue',fontSize:'35px',fontFamily:'Times New Roman'}}>Purchases</h></center>
                    <br></br>
                   <label>Product ID</label>
                   <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={id} name="id" className="form-control"  placeholder="ID" />
                    <br></br>
                    <br></br>
                    <label>Supplier Id</label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={SupplierId} name="SupplierId" className="form-control"  placeholder="SupplierId" />
                    <br></br>
                    <br></br>
                    <label>ProductId</label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={ProductId} name="ProductId" className="form-control"  placeholder="ProductId" />
                    <br></br>
                    <br></br>
                    <label>Number Received </label>
                    <br></br>
                    
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={NumberReceived} name="NumberReceived" className="form-control"  placeholder="NumberReceived" />
                    <br></br>
                    <br></br>
                    <label>Purchase Date</label>
                    <br></br>
                    
                    <input type="date" onChange={(evnt)=>handleChange(index, evnt)} value={PurchaseDate} name="PurchaseDate" className="form-control"  placeholder="PurchaseDate" />
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
export default Purchase