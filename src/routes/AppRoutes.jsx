import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Dashboard from '../components/layout/Dashboard';
import Error from '../components/Error';
import Profile from '../components/layout/Profile';
import NFT from '../components/layout/NFT';
import Table from '../components/layout/Table';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                {/* Add any routes that don't require the layout here */}

                {/* Layout Routes */}
                <Route path="/" element={<AppLayout />}>
                    {/* Child routes */}
                    <Route index element={<Dashboard />} />
                    <Route path="nft" element={<NFT />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="table" element={<Table />} />
                </Route>

                {/* Fallback for undefined routes */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
