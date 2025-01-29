import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';


const AppLayout = () => {
    const location = useLocation();

    // Check if the current route is "signin"
    const isSigninRoute = location.pathname === '/signIn';
    console.log('isSigninRoute', isSigninRoute)
    return (
        <div className="2sm:flex h-screen bg-[#F4F7FE] overflow-auto w-screen">
            {/* Sidebar - Only show if not on signin route */}
            {!isSigninRoute && <Sidebar />}
            <div className='flex-1'>
                <div className={isSigninRoute ? "w-full h-full" : "2lg:w-[calc(100vw_-_300px)] w-full lg:h-[calc(100vh_-_64px)] h-[calc(100vh_-_80px)] overflow-auto px-[20px] pb-[20px]"}>
                    {/* Header */}
                    {/* <Header /> */}
                    {/* Main Content */}
                    <div className='bg-[#F4F7FE] h-full'>
                        <div className={`${!isSigninRoute ? "" : ""} h-full`}>
                            <Outlet />
                        </div>
                    </div>
                    {/* Footer */}
                </div>
                {!isSigninRoute && <Footer />}
            </div>
        </div>
    );
};

export default AppLayout;
