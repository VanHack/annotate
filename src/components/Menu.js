import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';
import './Menu.css'

const Menu = () => (
    <Navbar brand='Annotate' href="/#" right>
        <NavLink to="/">
            <NavItem>Home</NavItem>
        </NavLink>
    </Navbar>
)

export default Menu