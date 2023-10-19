import React from 'react';
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetails from "../pages/PostDetails";

const Routes: React.FC = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetails />} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;