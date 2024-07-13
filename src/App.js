import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ThemeProvider from './Contexts/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/contact/*" element={<Contact />} />
                    <Route path="/home/*" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
