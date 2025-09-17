import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';  // ✅ Correct import

const AuthCheck = ({ children }) => {
  // Replace with actual authentication logic
  const isAuthenticate = true;  

  const location = useLocation();

  if (!isAuthenticate) {
    return (
      <Navigate 
        to="/auth/login" 
        state={
            { 
                from: location 
            }
        } 
       
      />
    );
  }

  return children;
};

export default AuthCheck;
