import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Nav from '../Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;