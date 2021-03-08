import './styles/App.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/Navbar.js';
import Presentation from './Components/Presentation.js';
import Formations from './Components/Formations.js';
import Competences from './Components/Competences.js';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio';

import React, { useState, useEffect } from "react";
const words1 = "Johan Travert";
const words2 = "Développeur web";

function App() {

    const [index1, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [wait, setWait] = useState(0);

    useEffect(() => {
        if (index1 === words1.length) return;

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 150);

        return () => clearTimeout(timeout);

    }, [index1]);

    useEffect(() => {
        if (index2 === words2.length) return;

        const timeout2 = setTimeout(() => {
            setWait((prev) => prev + 1);
            if(wait > 13) {
                setIndex2((prev) => prev + 1);
            }
        }, 150);

        return () => clearTimeout(timeout2);

    }, [index2, wait]);


    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar />
                <div className="intro-block">
                    <div className="main-title">
                        <h1>{`${words1.substring(0, index1)}`}</h1>
                        <h2>{`${words2.substring(0, index2)}`}</h2>
                    </div>
                </div>
            </header>
            <main className="app-content">
                <div className="container-fluid">
                    <div className="container my-5"><Presentation /></div>
                    <div className="my-5"><Formations /></div>
                    <div className="my-5"><Competences /></div>
                    <div className="mt-5"><Portfolio /></div>
                </div>
            </main>
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
  );
}

export default App;
