import Home from "./Home"
import {Route,Routes}from 'react-router-dom';
import Cusine from "./Cusine";


function Pages() {
  // console.log(process.env.APP_API_KEY);
  return (
 
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cuisine/:type" element={<Cusine/>} />
    </Routes>
  )
}

export default Pages;