import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Order', path: '/order'},
        {id: 4, name: 'Contact', path: '/contact'},
        {id: 5, name: 'About', path: '/about'},
    ]


    return (
        <nav className='bg-purple-200 w-full -mr-2 flex md:hidden'>
            <div onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            {/* {
                open ? <XMarkIcon onClick={()=> setOpen(!open)} className="h-6 w-6"/> : <Bars3Icon onClick={()=> setOpen(!open)} className="h-6 w-6"/>
            } */}
            
            <ul className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Header;