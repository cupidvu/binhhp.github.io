import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/route';
import './assets/style.css';
import React, { Suspense } from 'react';
import Header from './layouts/Header.jsx';

export default function App() {

    return (
        <Router>
            <Header />
            <Suspense fallback="">
                <Route />
            </Suspense>
        </Router>
    )
}

