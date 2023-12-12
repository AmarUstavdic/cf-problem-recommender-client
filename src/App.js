import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import RecommendedProblemsPage from "./pages/RecommendedProblemsPage";

// TODO: Figure out how to do redirecting to different pages, and restrict access to pages if not authenticated

function Dashboard() {
    return (
        <>
            {/* Content for the Dashboard */}
            GG
        </>
    );
}

function NotFoundComponent() {
    return (
        <>
            Component not found
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <RecommendedProblemsPage/>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </Router>
    );
}

export default App;
