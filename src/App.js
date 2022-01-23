
import './App.css';
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Demo from './Demo';
import { useEffect, useState } from 'react';
import DataContext from './redux/dataContext.js';
import axios from 'axios'
import Products from './pages/Products';
import CardDetails from './pages/CardDetails';
import NavMenuComp from './components/NavMenuComp/NavMenuComp';
import Contact from './pages/Contact';
import { useSelector } from 'react-redux';
import { selectUsername } from './redux/userSlice';

function App() {
  const [data,setData] = useState({})
  const fetchData= async()=>{
    let t = await axios.get('https://fakestoreapi.com/products/')
    .then(resp=> {
      let tmp = {...data};
      tmp.data =resp.data;
      setData(tmp)
    })
  }
  const user = useSelector(selectUsername)
  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
    <NavMenuComp username={user}/>
    <DataContext.Provider value={data}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<CardDetails />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
    </>
  );
}

export default App;
