import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import LoginPage from "./Components/Home/LoginAndRegistar/Login.jsx";
import RegisterPage from "./Components/Home/LoginAndRegistar/Registar.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/Register" element={<RegisterPage/>} />
    </Routes>
  </BrowserRouter>
);
