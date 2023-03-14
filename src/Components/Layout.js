import React from 'react';
import { NavBar } from '.'
import { Outlet } from 'react-router';
function Layout({fn}) {
    return (
        <div>
            <NavBar fn={fn} />
            <Outlet />
        </div>
    );
}

export default Layout;