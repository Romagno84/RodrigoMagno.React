import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <header>
             <Navbar className="navBar">
                 <Container>
                <Navbar.Brand><Link to="/"><img
                    src="../Image/logo.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-center"
                    /> {' '} Delivery de Bebidas S.O.S</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links">
                    <Nav.Link><Link to="/categoryId/1">Cervezas</Link></Nav.Link>
                    <Nav.Link><Link to="/categoryId/2">Vinos</Link></Nav.Link>
                    <NavDropdown title="Un Poquito de Todo" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/categoryId/3">Aperitivos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/categoryId/4">
                        Champagne
                     </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/category/5">Packs</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
            </Navbar>
        </header>

    )
     
    }

export default CustomNavbar;