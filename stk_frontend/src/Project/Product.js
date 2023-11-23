import { useState } from "react";
import "./Product.css";
import axios from "axios";

function Product() {
  const [inputFields, setInputFields] = useState([
    {
      id: "",
      ProductName: "",
      InventoryReceived: "",
      InventoryShipped: "",
      InventoryOnHand: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        id: "",
        ProductName: "",
        InventoryReceived: "",
        InventoryShipped: "",
        InventoryOnHand: "",
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
    axios.post("http://localhost:8080/product",inputFields)
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
    axios.post("http://localhost:8080/product",inputFields)
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
            const {
              id,
              ProductName,
              InventoryReceived,
              InventoryShipped,
              InventoryOnHand,
            } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col">
                  <div className="form-group">
                    <center>
                      <h style={{ color: "blue", fontSize: "35px", fontFamily: "Times New Roman" }}>
                        Product Details
                      </h>
                    </center>
                    <br></br>
                    <label>Product ID</label>
                    <br></br>
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={id}
                      name="id"
                      className="form-control"
                      placeholder="ID"
                    />
                    <br></br>
                    <br></br>
                    <label>Product Name</label>
                    <br></br>
                    <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={ProductName} name="ProductName" className="form-control"  placeholder="Product Name"/>
                    <br></br>
                    <br></br>
                    <label>Inventory Received</label>
                    <br></br>
                    <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={InventoryReceived} name="InventoryReceived" className="form-control"  placeholder="Inventory Received"/>
                    <br></br>
                    <br></br>
                    <label>Inventory Shipped</label>
                    <br></br>
                    <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={InventoryShipped} name="InventoryShipped" className="form-control"  placeholder="Inventory Shipped"/>
                    <br></br>
                    <br></br>
                    <label>Inventory OnHand</label>
                    <br></br>
                    <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={InventoryOnHand} name="InventoryOnHand" className="form-control"  placeholder="Inventory OnHand"/>
                     
                    
                    {/* More input fields */}
                  </div>
                </div>
                <div className="col">
                  {inputFields.length !== 1 ? (
                    <button className="btn btn-outline-danger" onClick={() => removeInputFields(index)}>
                      x
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
          <br></br>
          <div className="row">
            <div className="col-sm-12">
              <button style={{ color: "white", fontSize: "25px", fontFamily: "Times New Roman", backgroundColor: " #4c75af" }} className="btn btn-outline-success" onClick={addInputField}>
                Add New
              </button>
              <button className="submit" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

export default Product;
