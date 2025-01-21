import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import LoginPage from "./Components/Home/LoginAndRegistar/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import RegisterPage from "./Components/Home/LoginAndRegistar/Registar.jsx";
import UpdateUser from "./Components/Home/LoginAndRegistar/UpdateUser.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route path="/Home" element={<Home/>} />
      <Route index element={<LoginPage/>} />
      <Route path="Register" element={<RegisterPage/>} />
      <Route path="ForgetPassword" element={<UpdateUser/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
