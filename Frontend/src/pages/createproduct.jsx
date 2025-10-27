import React from 'react'
import {useState} from "react"

export default function Createproduct() {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const[image,setImage]=useState("");

    const handleSubmit=async(e) => {
        console.log(e.target.value);
        try{
            const res=await fetch('http://localhost:3000/api/products',{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({ name ,price, image})
            })
            if(res.ok){
                alert(`Product "${name}" added successfully!`)
                setName('')
                setPrice('')
                setImage('')
            }else{
                alert('Failed to add product')
            }

        } catch(error) {
            console.error(error);
            alert('Error connecting to server');
        }
        

    }
  return (
    <>
   <div
  style={{
    display: "flex",
    flexDirection: "column",   // Stack heading and form vertically
    justifyContent: "center",  // Center vertically
    alignItems: "center",      // Center horizontally
    height: "100vh",
    backgroundColor: "#f5f5f5"
  }}
>
  <h1 style={{ marginBottom: "20px" }}>Add Product</h1>

  <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "300px",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "white",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      alignItems: "center"
    }}
  >
    <input
      type="text"
      value={name}
      placeholder="Enter product name"
      onChange={(e) => setName(e.target.value)}
      required
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "100%"
      }}
    />

    <input
      type="number"
      value={price}
      placeholder="Enter product price"
      onChange={(e) => setPrice(e.target.value)}
      required
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "100%"
      }}
    />

    <input
      type="text"
      value={image}
      placeholder="Enter product image"
      onChange={(e) => setImage(e.target.value)}
      required
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "100%"
      }}
    />

    <button
      type="submit"
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        width: "100%",
        cursor: "pointer"
      }}
    >
      Add Product
    </button>
  </form>
</div>
</>)}