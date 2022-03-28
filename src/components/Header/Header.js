import React from 'react'
import './Header.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../../images/panda.png'

const Header = () => {
    return (
        <div className={'header'}>
            <Navbar className={'navbar'} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className={'me-5'} href="/">
                        <img className={'logo'} src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link className={'fw-bold'} href="/">Home</Nav.Link>
                            <Nav.Link className={'fw-bold'} href="/news">News</Nav.Link>
                            <Nav.Link className={'fw-bold'} href="/about-us">About Us</Nav.Link>
                            <NavDropdown className={'fw-bold'} title="Offer" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#offer/normal">Normal</NavDropdown.Item>
                                <NavDropdown.Item href="#offer/premium">Premium</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#offer/extra">Something Cool</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className={'user-section'}>
                            <Nav.Link className={'login'} href="#login">Login</Nav.Link>
                            <Nav.Link className={'register'} href="#register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;