import React from 'react';
import { Outlet } from 'react-router-dom';  // ✅ Correct import

const Auth = () => {
    return (
        <div>
            {/* This is Auth Layout Component */}
            

            {/* Nested routes will be rendered here */}
            <Outlet />
        </div>
    );
};

export default Auth;
