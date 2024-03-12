import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ensure this import path is correct
import About from './components/About'; // Ensure this import path is correct
import Projects from './components/Projects'; // Ensure this import path is correct
import Contact from './components/Contact'; // Ensure this import path is correct

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <header className="App-header">
                                <p>Hi, I am Vijay/Sonam</p>
                            </header>
                            <body className="App-body">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>This website is powered by <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><code>React.js</code></a></p>
                            </body>
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Define other routes and corresponding components here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
