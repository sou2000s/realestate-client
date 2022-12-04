import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet></Outlet>
        </div>
    );
};

export default Layout;