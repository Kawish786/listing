import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Listing() {
    const nav =useNavigate()
    const handleHome=()=>{
        nav('/')
    }
    const [data,setData]= useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetch("https://fakestoreapi.com/products/");
            const x = await result.json();
            setData(x);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
    <h1 className='text-warning' style={{margin:"1rem"}}>Listing</h1>
    <h4 className='text-primary' style={{margin:"1rem",cursor:"pointer"}} onClick={handleHome}>Home</h4>
    </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {data.map((x)=>(
    <div className="card" style={{width:"18rem" , margin:"1rem"}}>
    <img style={{width:"10rem",height:"10rem",borderRadius:"50%",objectFit:"cover",marginLeft:"auto",marginRight:"auto"}} src={x.image} className="card-img-top" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{x.title}</h5>
      <p className="card-text">{x.id}</p>
      <Link to={`/product/${x.id}`}><label className="btn btn-dark">Check Detail</label></Link>
      {/* ABove replace spaces into dash in the url
        title.replace(/\s+/g, '-').toLowerCase()  it will replace space with hyphon in the url if title is used in link
       */}
    </div>
  </div>
    ))}
    </div>
    </>
    
  );
}

export default Listing