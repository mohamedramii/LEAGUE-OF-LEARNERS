import React, { useEffect } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route, redirect , Navigate} from "react-router-dom";
import Login from "../src/Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Singup/Signup";
import AuthProvider from "./AuthContext/AuthContext";
import RequireAuth from "./AuthContext/RequireAuth";
import ResetPass from "./Components/Auth/ResetPassword/ResetPass";
function App() {

 
  return (
    <div className='App'>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* < exact from='/' to='/login' /> */}
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='/Main'
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />

          <Route path='/Signup' element={<Signup />} />
          <Route path='/ResetPassword' element={<ResetPass />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
