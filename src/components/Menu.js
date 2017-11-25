import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-materialize';
import './Menu.css'

const Menu = () => (
    <Navbar className="green darken-2" brand='Annotate' href="/#" right>
        <NavLink to="/" role="navigation" aria-controls="home" tabIndex="0">
            Home
        </NavLink>
    </Navbar>
)

export default Menu