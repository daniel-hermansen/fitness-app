import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css';

library.add(fab, faBars);



function NavBar(){
    return(
    <nav>
        <h1 id="pagetitle">My FitnessApp</h1>

        <FontAwesomeIcon id = "hamburger" icon="bars" size = "2x"/>
    </nav>
    )
};

export default NavBar;