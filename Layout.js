import React from 'react';
import {Link,Outlet} from "react-router-dom";
import "./App.css"
const Layout = () => {
  return (
    <>
     <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="/">INDIA</Link>
  </li>
  <li class="nav-item">
  <Link to="/bangladesh">BANGLADESH</Link>
  </li>
  <li class="nav-item">
  <Link to="/chinna">CHINNA</Link>
  </li>
  <li class="nav-item">
  <Link to="/us">US</Link>
  </li>
</ul>  
<Outlet/> 
    </>
  )
}

export default Layout