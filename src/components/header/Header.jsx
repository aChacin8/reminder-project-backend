import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <Navbar style={{borderRadius: '10px', padding: '10px', backgroundColor: ' rgb(47, 126, 245)'}} data-bs-theme="dark" className='navbar'>
            <Container>
                <Navbar.Brand href='/'>TASKLY</Navbar.Brand>
                <Nav className='Navbar'>
                    <Nav.Link href='/Login'>Inicia Sesion</Nav.Link>
                    <Nav.Link href='/SignUp'>Registrate</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header; 