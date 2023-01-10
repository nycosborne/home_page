import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand='xxl' className={'nav-bar ml-auto'} fixed="top">
            <Container>
                <Navbar.Brand>nycosborne.com</Navbar.Brand>
                {/*todo: Need to move navbar collapse to left side*/}
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" className={'ml-auto'}/>*/}
                {/*<Navbar.Collapse id="basic-navbar-nav" className={'ml-auto'}>*/}
                {/*    <Nav className="me-auto ml-auto">*/}
                {/*        <Nav.Link href="#home">Home</Nav.Link>*/}
                {/*        <Nav.Link href="#link">Link</Nav.Link>*/}
                {/*    </Nav>*/}
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>

    );
}

export default NavBar;
