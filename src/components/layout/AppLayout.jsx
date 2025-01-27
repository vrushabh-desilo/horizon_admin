import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';


const AppLayout = () => {
    const location = useLocation();

    // Check if the current route is "signin"
    const isSigninRoute = location.pathname === '/signin';

    return (
        <div className="flex h-screen">
            {/* Sidebar - Only show if not on signin route */}
            {!isSigninRoute && <Sidebar />}
            <div className={isSigninRoute ? "w-full h-full" : "w-[calc(100vw_-_300px)] h-full"}>
                {/* Header */}
                {/* <Header /> */}
                {/* Main Content */}
                <div className='bg-[#F4F7FE] h-full'>
                    <div className={`${!isSigninRoute ? "p-[20px] pt-[40px]" : ""} h-full`}>
                        <Outlet />
                    </div>
                </div>
                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default AppLayout;
