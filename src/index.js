import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import MainPage from './pages/mainpage/index';
import BlogPage from './pages/blogpage/index';
import PastBlogs   from './pages/pastblogs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
  <Route path = "/" element = {<MainPage/>}/>
  <Route path = "/blogs" element = {<BlogPage/>}/>
  <Route path = "/pastblogs/*" element = {<PastBlogs/>}>
  </Route>
  </Routes>  
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
