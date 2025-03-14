import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg='primary' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='/'>Navbar</Navbar.Brand>
                <Nav className=''>
                    <Nav.Link href='/'>Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header; 