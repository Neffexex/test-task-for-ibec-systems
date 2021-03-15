import React from 'react';
import {NavLink, Link} from "react-router-dom"
import {Nav, Navbar} from "react-bootstrap";
import logo from "../../assets/logo.png"
function Header(): JSX.Element {
    const menu = [
        {
            title: "Главная",
            path: "/"
        },
        {
            title: "О нас",
            path: "/about"
        },
        {
            title: "Контакты",
            path: "/contacts"
        }
    ]
    return (
        <header className="header">
            <Navbar expand="lg">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {menu.map(({title, path}) => (
                            <li key={path}><NavLink exact={true} activeClassName="active" to={path}>{title}</NavLink></li>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
