import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UsNews from './UsNews';
import BangladeshNews from './BangladeshNews';
import ChinnaNews from './ChinnaNews';
import IndiaNews from './IndiaNews';
import Layout from './Layout';

import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function  News (){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<App/>} />
            <Route path="us" element={<UsNews />} />
            <Route path="chinna" element={<ChinnaNews />} />
            <Route path="bangladesh" element={<BangladeshNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }


ReactDOM.render(<News/>,document.getElementById('root'));

