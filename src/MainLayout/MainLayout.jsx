import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Home from "../Pages/Home/Home.jsx";
import Auth from "../Pages/Register/Auth.jsx";
import Login from "../Pages/Auth/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import Error from "../Pages/Error/Error.jsx";
import AuthCheck from "../AuthCheck/AuthCheck.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={
            <AuthCheck>
                <Home />
            </AuthCheck>
            
            
    } />

        {/* Auth Layout with Nested Routes */}
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>

        {/* footer component */}
        <Footer/>
         
    </BrowserRouter>
  );
};

export default MainLayout;
