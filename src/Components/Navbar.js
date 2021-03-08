import {Navbar, Nav} from 'react-bootstrap';
import '../styles/Navbar.css';
import img from '../images/favicon.png';
import React, { useState } from 'react';


function MyNavbar() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        const height = window.innerHeight;
        if(window.scrollY >= (height * 0.7)) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (<Navbar className={navbar ? "scroll navbar mt-0 py-0" : "mynavbar navbar mt-4 py-0"} variant="dark" fixed="top" expand="xl">
        <span id="logo" className="mx-5"><img src={img} alt="icon brand for navbar" /></span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mynav ml-5">
                <Nav.Link href="#home" className="item">Presentation</Nav.Link>
                <Nav.Link href="#link" className="item">Formation</Nav.Link>
                <Nav.Link href="#link" className="item">Compétences</Nav.Link>
                <Nav.Link href="#link" className="item">Portfolio</Nav.Link>
                <Nav.Link href="#link" className="item">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}


export default MyNavbar;


