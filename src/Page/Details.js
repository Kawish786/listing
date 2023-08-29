import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    let {productId} = useParams()// productId define in the HOme component while making Route 
    const [product,setProduct]= useState([])
    // const callData = async () => {
          
    //     const result = await fetch("https://fakestoreapi.com/products/");
    //     const x = await result.json();
    //     const newProduct = x.find((i)=> i.id === parseInt(productId))
    //     setProduct(newProduct);
    //     console.log(newProduct)
       
    // };
    const callData = async ()=>{
        const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const x = await result.json();
        setProduct(x)


    }
    

    useEffect(() => {
         callData();
      }, []);
      
    
  return (
    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center"}}>
       <h1>Detail of the Product</h1>
       <img style={{width:"10rem",height:"10rem",borderRadius:"50%",objectFit:"cover",marginLeft:"auto",marginRight:"auto"}} src={product.image} alt=''/>
       <h4>$ {product.price}</h4>
       <h1 style={{width:"50rem",marginLeft:"auto",marginRight:"auto"}}>{product.title}</h1>
       <p style={{width:"50rem",marginLeft:"auto",marginRight:"auto"}}>{product.description}</p>
       <h2>{product.category}</h2> 
       <Link to='/listing'><button className='btn btn-primary'> Go Back</button> </Link>
    </div>
    
  )
}

export default Details