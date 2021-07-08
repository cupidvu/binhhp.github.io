import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/route';
import './assets/style.css';
import React, { Suspense, useState } from 'react';
import Header from './layouts/Header';
import Layout from './layouts/Layout';
import "./assets/icomoon/style.css";
import 'aos/dist/aos.css'; 

export default function App() {

    const [menu, setMenu] = useState(false);

    const hanlderMenu = () => {
        setMenu(!menu);
    };

    return (
        <Router>
            <Header menu={menu}/>
            <Suspense fallback="">
                <Layout menu={menu} hanlderMenu={hanlderMenu}>
                    <Route />
                </Layout>
            </Suspense>
        </Router>
    )
}

