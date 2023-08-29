import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav=useNavigate()
    const handleList =()=>{
        nav("/listing")
    }
  return (
    <>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">Products</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <label style={{margin:"10px"}} className="nav-link fw-bold py-1 px-0 active" aria-current="page">Home</label>
        <label style={{margin:"10px"}} className="nav-link fw-bold py-1 px-0" onClick={handleList}>Listing</label>
      </nav>
    </div>
  </header>

  <main className="px-3">
    <h1>List of Products.</h1>
    <p className="lead">Fetch the API of Products. Make a list, after clicking on the Product profile you can see all the details of Product.</p>
    <p className="lead">
      <label className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</label>
    </p>
  </main>
</div>
    </>
  )
}

export default Home