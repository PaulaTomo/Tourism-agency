import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../Styles/Navigation.css";
import Logo from "./../Images/Logo.png"

const Layout = () => {
    return (
        <>
            <Navbar className="nav" collapseOnSelect expand="lg" variant="dark" >
                <Container className="container-fluid">
                    <Navbar.Brand href="/">
                      <img src={Logo} width="50" height="50" alt="Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" nav-link  ms-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/AboutUs">About Us</Link>
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;