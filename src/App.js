import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Listing from './Page/Listing';
import Details from './Page/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/listing' element={<Listing/>}/>
      <Route path='/product/:productId' element={<Details/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
