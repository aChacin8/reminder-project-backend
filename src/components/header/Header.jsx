import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg='primary' style={{borderRadius: '10px', padding: '10px'}}>
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