import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


const AppLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />
            <div className=" w-[calc(100vw_-_300px)] h-full">
                {/* Header */}
                {/* <Header /> */}
                {/* Main Content */}
                <div className='bg-[#F4F7FE]  h-full'>
                    <div className='p-[20px] pt-[40px] h-full'>
                        <Outlet />
                    </div>
                </div>
                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </div >
    );
};

export default AppLayout;
