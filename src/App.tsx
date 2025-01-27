import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '@components/Layout/layout';
import Home from '@pages/Home';
import About from '@pages/About';
import Contact from '@pages/Contact';
import PageNotFound from '@pages/PageNotFound';

import './App.css';

const App: React.FC = () => {
    const { i18n } = useTranslation();

    React.useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
